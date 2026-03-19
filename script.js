// Classe principal do simulador
class KChiefSimulator {
    constructor() {
        this.questions = [...QUESTIONS_DB];
        this.currentTest = {
            studentName: '',
            totalQuestions: 0,
            questions: [],
            currentIndex: 0,
            correct: 0,
            wrong: 0,
            answers: {},
            wrongQuestions: [], // IDs das questões erradas
            usedQuestions: [] // IDs das questões já usadas em testes anteriores
        };
        
        this.timerInterval = null;
        this.autoNextTimeout = null;
        this.answered = false;
        this.locked = false; // Bloqueia mudança após erro

        this.initializeElements();
        this.attachEvents();
    }

    initializeElements() {
        // Telas
        this.configScreen = document.getElementById('config-screen');
        this.testScreen = document.getElementById('test-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.historyScreen = document.getElementById('history-screen');

        // Elementos do teste
        this.questionCounter = document.getElementById('question-counter');
        this.timer = document.getElementById('timer');
        this.correctCount = document.getElementById('correct-count');
        this.wrongCount = document.getElementById('wrong-count');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.explanation = document.getElementById('explanation');
        this.nextButton = document.getElementById('next-question');
        this.finishButton = document.getElementById('finish-test');

        // Botões de navegação
        document.getElementById('btn-novo-teste').addEventListener('click', () => this.showConfig());
        document.getElementById('btn-historico').addEventListener('click', () => this.showHistory());
        document.getElementById('novo-teste-result').addEventListener('click', () => this.showConfig());
        document.getElementById('revisar-erros').addEventListener('click', () => this.reviewMistakes());
        document.getElementById('voltar-history').addEventListener('click', () => this.showConfig());

        // Form de configuração
        document.getElementById('config-form').addEventListener('submit', (e) => this.startNewTest(e));
    }

    attachEvents() {
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.finishButton.addEventListener('click', () => this.finishTest());
    }

    showConfig() {
        this.hideAllScreens();
        this.configScreen.classList.add('active');
        this.clearTimers();
    }

    showHistory() {
        this.hideAllScreens();
        this.historyScreen.classList.add('active');
        resultManager.renderHistory('history-list');
    }

    hideAllScreens() {
        this.configScreen.classList.remove('active');
        this.testScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');
        this.historyScreen.classList.remove('active');
    }

    clearTimers() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        if (this.autoNextTimeout) {
            clearTimeout(this.autoNextTimeout);
            this.autoNextTimeout = null;
        }
    }

    startNewTest(e) {
        e.preventDefault();
        
        const studentName = document.getElementById('student-name').value.trim();
        const numQuestions = parseInt(document.getElementById('num-questions').value);

        if (!studentName) {
            alert('Por favor, informe seu nome.');
            return;
        }

        if (numQuestions < 1 || numQuestions > 100) {
            alert('Número de questões deve estar entre 1 e 100.');
            return;
        }

        // Inicializar novo teste
        this.currentTest = {
            studentName,
            totalQuestions: numQuestions,
            questions: this.selectRandomQuestions(numQuestions),
            currentIndex: 0,
            correct: 0,
            wrong: 0,
            answers: {},
            wrongQuestions: [],
            usedQuestions: this.currentTest.usedQuestions
        };

        this.answered = false;
        this.locked = false;

        // Mostrar tela de teste
        this.hideAllScreens();
        this.testScreen.classList.add('active');

        // Carregar primeira questão
        this.loadQuestion(0);
    }

    selectRandomQuestions(count) {
        // Filtrar questões não utilizadas (exclui questões que já foram usadas em testes anteriores)
        let availableQuestions = this.questions.filter(q => 
            !this.currentTest.usedQuestions.includes(q.id)
        );

        // Se não houver questões suficientes, resetar questões usadas
        if (availableQuestions.length < count) {
            availableQuestions = this.questions.filter(q => 
                !this.currentTest.wrongQuestions.includes(q.id)
            );
        }

        // Embaralhar e selecionar
        const shuffled = this.shuffleArray([...availableQuestions]);
        return shuffled.slice(0, count);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    loadQuestion(index) {
        if (index >= this.currentTest.questions.length) {
            this.finishTest();
            return;
        }

        const question = this.currentTest.questions[index];
        
        // Atualizar contador
        this.questionCounter.textContent = `Questão ${index + 1}/${this.currentTest.totalQuestions}`;
        
        // Carregar questão
        this.questionText.textContent = question.question;
        
        // Gerar opções
        this.renderOptions(question);
        
        // Resetar estado
        this.answered = false;
        this.locked = false;
        this.explanation.classList.add('hidden');
        this.explanation.innerHTML = '';
        this.nextButton.disabled = true;
        
        // Iniciar timer
        this.startTimer();

        // Verificar se questão já foi respondida
        const answer = this.currentTest.answers[question.id];
        if (answer) {
            this.markAnswer(question, answer.selected);
        }
    }

    renderOptions(question) {
        let html = '';
        question.options.forEach((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            html += `
                <div class="option" data-option="${index}">
                    <input type="radio" name="question" value="${index}" id="opt${index}">
                    <label for="opt${index}"><strong>${letter})</strong> ${option}</label>
                </div>
            `;
        });

        this.optionsContainer.innerHTML = html;

        // Adicionar eventos
        this.optionsContainer.querySelectorAll('.option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                if (!this.answered && !this.locked) {
                    const radio = opt.querySelector('input[type="radio"]');
                    radio.checked = true;
                    this.checkAnswer(parseInt(opt.dataset.option));
                }
            });
        });
    }

    checkAnswer(selectedIndex) {
        if (this.answered || this.locked) return;

        const question = this.currentTest.questions[this.currentTest.currentIndex];
        const isCorrect = selectedIndex === question.correct;
        
        // Marcar como respondida
        this.answered = true;
        this.clearTimers();
        this.timer.textContent = '0s';

        // Salvar resposta
        this.currentTest.answers[question.id] = {
            selected: selectedIndex,
            correct: isCorrect
        };

        // Destacar opções
        this.highlightOptions(question, selectedIndex);

        if (isCorrect) {
            // Resposta correta
            this.currentTest.correct++;
            this.correctCount.textContent = this.currentTest.correct;
            
            // Auto-avanço após 5 segundos
            this.autoNextTimeout = setTimeout(() => {
                this.nextQuestion();
            }, 5000);
            
            this.nextButton.disabled = false;
        } else {
            // Resposta errada
            this.currentTest.wrong++;
            this.wrongCount.textContent = this.currentTest.wrong;
            
            // Adicionar aos erros
            this.currentTest.wrongQuestions.push(question.id);
            
            // Mostrar explicação
            this.showExplanation(question);
            
            // Bloquear mudança de opção
            this.locked = true;
            this.nextButton.disabled = false;
        }

        // Atualizar estatísticas
        this.updateStats();
    }

    highlightOptions(question, selectedIndex) {
        const options = this.optionsContainer.querySelectorAll('.option');
        
        options.forEach((opt, index) => {
            opt.classList.add('disabled');
            
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                opt.classList.add('wrong');
            }
            
            // Desabilitar radio buttons
            opt.querySelector('input[type="radio"]').disabled = true;
        });
    }

    showExplanation(question) {
        const correctAnswer = String.fromCharCode(65 + question.correct);
        this.explanation.innerHTML = `
            <strong>Resposta Correta: ${correctAnswer}) ${question.options[question.correct]}</strong><br>
            <p>${question.explanation}</p>
        `;
        this.explanation.classList.remove('hidden');
    }

    startTimer() {
        let seconds = 5;
        this.timer.textContent = `${seconds}s`;
        
        this.timerInterval = setInterval(() => {
            seconds--;
            this.timer.textContent = `${seconds}s`;
            
            if (seconds <= 0) {
                this.clearTimers();
            }
        }, 1000);
    }

    nextQuestion() {
        this.clearTimers();
        
        this.currentTest.currentIndex++;
        
        if (this.currentTest.currentIndex < this.currentTest.questions.length) {
            this.loadQuestion(this.currentTest.currentIndex);
        } else {
            this.finishTest();
        }
    }

    finishTest() {
        this.clearTimers();
        
        // Calcular resultado
        const total = this.currentTest.totalQuestions;
        const correct = this.currentTest.correct;
        const percentage = (correct / total) * 100;
        const approved = percentage >= 70;

        // Adicionar ao histórico
        resultManager.addResult({
            studentName: this.currentTest.studentName,
            total: total,
            correct: correct,
            wrong: this.currentTest.wrong,
            percentage: percentage,
            approved: approved,
            wrongQuestions: this.currentTest.wrongQuestions
        });

        // Atualizar questões usadas
        this.currentTest.questions.forEach(q => {
            if (!this.currentTest.usedQuestions.includes(q.id)) {
                this.currentTest.usedQuestions.push(q.id);
            }
        });

        // Mostrar tela de resultado
        this.hideAllScreens();
        this.resultScreen.classList.add('active');
        
        // Renderizar resultado
        this.renderResult(percentage, approved);
    }

    renderResult(percentage, approved) {
        const resultStats = document.getElementById('result-stats');
        const resultMessage = document.getElementById('result-message');
        
        resultStats.innerHTML = `
            <p><strong>Aluno:</strong> ${this.currentTest.studentName}</p>
            <p><strong>Total de Questões:</strong> ${this.currentTest.totalQuestions}</p>
            <p><strong>Acertos:</strong> ${this.currentTest.correct}</p>
            <p><strong>Erros:</strong> ${this.currentTest.wrong}</p>
            <p><strong>Percentual:</strong> ${percentage.toFixed(1)}%</p>
        `;
        
        resultMessage.className = approved ? 'approved' : 'failed';
        resultMessage.textContent = approved ? 
            '🎉 PARABÉNS! APROVADO!' : 
            '📚 ESTUDE MAIS! REPROVADO!';
    }

    reviewMistakes() {
        if (this.currentTest.wrongQuestions.length === 0) {
            alert('Parabéns! Você não errou nenhuma questão neste teste!');
            return;
        }

        // Criar novo teste apenas com questões erradas
        const wrongQuestionsList = this.questions.filter(q => 
            this.currentTest.wrongQuestions.includes(q.id)
        );

        // Configurar novo teste com questões erradas
        this.currentTest = {
            studentName: this.currentTest.studentName,
            totalQuestions: wrongQuestionsList.length,
            questions: this.shuffleArray(wrongQuestionsList),
            currentIndex: 0,
            correct: 0,
            wrong: 0,
            answers: {},
            wrongQuestions: [],
            usedQuestions: this.currentTest.usedQuestions
        };

        this.answered = false;
        this.locked = false;

        // Mostrar tela de teste
        this.hideAllScreens();
        this.testScreen.classList.add('active');

        // Carregar primeira questão
        this.loadQuestion(0);
    }

    updateStats() {
        this.correctCount.textContent = this.currentTest.correct;
        this.wrongCount.textContent = this.currentTest.wrong;
    }

    markAnswer(question, selectedIndex) {
        this.answered = true;
        this.locked = true;
        
        this.highlightOptions(question, selectedIndex);
        
        if (selectedIndex === question.correct) {
            this.showExplanation(question);
        }
        
        this.nextButton.disabled = false;
    }
}

// Inicializar simulador quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    window.simulator = new KChiefSimulator();
});