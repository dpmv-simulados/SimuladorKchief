// Gerenciamento de histórico de resultados
class ResultManager {
    constructor() {
        this.STORAGE_KEY = 'kchief_test_results';
        this.results = this.loadResults();
    }

    // Carregar resultados do localStorage
    loadResults() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    // Salvar resultados no localStorage
    saveResults() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.results));
    }

    // Adicionar novo resultado
    addResult(result) {
        const newResult = {
            id: Date.now(),
            ...result,
            timestamp: new Date().toISOString()
        };
        this.results.unshift(newResult); // Adiciona no início
        this.saveResults();
        return newResult;
    }

    // Obter todos os resultados
    getResults() {
        return this.results;
    }

    // Obter resultado por ID
    getResultById(id) {
        return this.results.find(r => r.id === id);
    }

    // Limpar histórico
    clearHistory() {
        this.results = [];
        this.saveResults();
    }

    // Renderizar histórico no HTML
    renderHistory(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (this.results.length === 0) {
            container.innerHTML = '<p class="empty-history">Nenhum resultado encontrado.</p>';
            return;
        }

        let html = '';
        this.results.forEach(result => {
            const date = new Date(result.timestamp);
            const formattedDate = date.toLocaleDateString('pt-BR');
            const formattedTime = date.toLocaleTimeString('pt-BR');
            const percentage = ((result.correct / result.total) * 100).toFixed(1);
            const status = result.approved ? 'approved' : 'failed';
            const statusText = result.approved ? 'Aprovado' : 'Reprovado';

            html += `
                <div class="history-item ${status}">
                    <div class="history-info">
                        <strong>${result.studentName}</strong><br>
                        <small>${formattedDate} ${formattedTime}</small><br>
                        <small>Acertos: ${result.correct}/${result.total} (${percentage}%)</small>
                    </div>
                    <div class="result-badge ${status}">${statusText}</div>
                </div>
            `;
        });

        container.innerHTML = html;
    }
}

// Instância global do gerenciador de resultados
const resultManager = new ResultManager();