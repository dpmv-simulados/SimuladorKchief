const QUESTIONS_DB = [
    {
        id: 1,
        question: "O que significa a abreviação PS no sistema K-Chief 700?",
        options: ["Power Station", "Process Station", "Pressure Sensor", "Personal System"],
        correct: 1,
        explanation: "PS refere-se à Process Station, que são as estações de processamento responsáveis pelo controle dos equipamentos de campo."
    },
    {
        id: 2,
        question: "Qual é o significado de AIM?",
        options: ["Automated Intelligent Management", "Advanced Integrated Multifunction", "Alarm Internal Monitor", "Auxiliary Input Module"],
        correct: 1,
        explanation: "AIM significa Advanced Integrated Multifunction, uma tecnologia avançada do sistema K-Chief."
    },
    {
        id: 3,
        question: "O que significa a sigla UPS?",
        options: ["Uninterrupted Power Supply", "Unit Process Standard", "Universal Power System", "Utility Provider Service"],
        correct: 0,
        explanation: "UPS significa Uninterrupted Power Supply (Fonte de Alimentação Ininterrupta), essencial para manter o sistema funcionando em caso de queda de energia."
    },
    {
        id: 4,
        question: "Como são chamadas as redes redundantes entre OS, HS e FS?",
        options: ["Net 1 e Net 2", "Main Net e Sub Net", "Net A e Net B", "Alpha e Beta"],
        correct: 2,
        explanation: "O sistema utiliza duas redes redundantes denominadas Net A e Net B para garantir comunicação contínua."
    },
    {
        id: 5,
        question: "Quais componentes são responsáveis por controlar e monitorar o equipamento de campo?",
        options: ["Monitores OS", "RCUs (ex: RCU500, RCU510)", "HUBs e Cabos", "Estação de História (HS)"],
        correct: 1,
        explanation: "As RCUs (Remote Control Unit) são os computadores que controlam diretamente os equipamentos de campo."
    },
    {
        id: 6,
        question: "Qual é o propósito principal da History Station (HS)?",
        options: [
            "Operar as bombas manualmente",
            "Armazenamento de longo prazo (Time Series) e bancos de dados SQL",
            "Substituir a OS em caso de falha",
            "Controlar o motor principal"
        ],
        correct: 1,
        explanation: "A HS serve para armazenamento de longo prazo de valores (Time Series) e bancos de dados de eventos."
    },
    {
        id: 7,
        question: "O que acontece se uma Operator Station (OS) sofrer uma falha crítica de hardware?",
        options: [
            "Todas as PSs param de funcionar",
            "Um alarme de sistema é gerado, mas as PSs continuam operando normalmente",
            "O sistema inteiro entra em blackout",
            "A rede Net B assume o controle total"
        ],
        correct: 1,
        explanation: "Uma falha na OS gera um alarme, mas não afeta as PSs em execução, garantindo a continuidade do controle."
    },
    {
        id: 8,
        question: "Com que frequência uma PS relata seu status na página de status?",
        options: ["A cada 1 segundo", "A cada 30 segundos", "A cada 10-11 segundos", "Apenas quando ocorre um erro"],
        correct: 2,
        explanation: "O tempo de relato (Last Reported) é de aproximadamente 10 a 11 segundos."
    },
    {
        id: 9,
        question: "Como um erro em uma PS é indicado visualmente no System Status?",
        options: [
            "Cor preta fixa",
            "Símbolo desaparece da tela",
            "Cor piscante de acordo com a prioridade do alarme",
            "Um 'X' azul sobre o componente"
        ],
        correct: 2,
        explanation: "Erros são indicados por cores piscantes seguindo a prioridade do alarme."
    },
    {
        id: 10,
        question: "Qual deve ser o valor mínimo na coluna 'Spare Time' no System Status?",
        options: ["Pelo menos 5%", "Pelo menos 10%", "Pelo menos 30%", "Exatamente 50%"],
        correct: 2,
        explanation: "Recomenda-se que o tempo livre (Spare Time) seja de pelo menos 30% para garantir performance adequada."
    },
    {
        id: 11,
        question: "Como se atualiza as estatísticas na página Net Status?",
        options: [
            "Pressionando F5",
            "Clicando com o botão direito e selecionando 'Update Statistic'",
            "Reiniciando a OS",
            "Ocorre automaticamente a cada segundo"
        ],
        correct: 1,
        explanation: "A atualização é feita via menu de contexto clicando com o botão direito do mouse."
    },
    {
        id: 12,
        question: "No Station Explorer, o que o botão 'B' permite abrir?",
        options: [
            "O histórico de alarmes",
            "A visualização do bloco IO (IO-block view)",
            "O menu de ajuda",
            "A configuração de rede"
        ],
        correct: 1,
        explanation: "O botão 'B' abre a visualização dos blocos de entrada/saída (IO-block view)."
    },
    {
        id: 13,
        question: "Quais símbolos indicam erro no Station Explorer?",
        options: [
            "Círculo verde",
            "Seta azul para cima",
            "O, ● e sino vermelho",
            "Triângulo amarelo"
        ],
        correct: 2,
        explanation: "Falhas são representadas por um sino vermelho, círculo preto ou O no Station Explorer."
    },
    {
        id: 14,
        question: "O que significa o texto na cor marrom no Station Explorer?",
        options: [
            "Operação normal",
            "Situação passiva (operação)",
            "Falha crítica",
            "Modo de manutenção"
        ],
        correct: 1,
        explanation: "O texto marrom indica uma situação passiva de operação."
    },
    {
        id: 15,
        question: "É necessária alguma permissão especial para desligar a OS?",
        options: [
            "Não, qualquer um pode desligar",
            "Sim, é necessária a 'exit-permission' configurada",
            "Apenas com a senha do engenheiro chefe",
            "Apenas no modo de simulação"
        ],
        correct: 1,
        explanation: "O desligamento requer a permissão de saída (exit-permission) configurada no sistema."
    },
    {
        id: 16,
        question: "Quais são as cinco partes de um Function Module?",
        options: [
            "Tag name, Symbol, Terminals, Algorithm, Parameters",
            "Nome, Ícone, Cabo, Manual, Valor",
            "Input, Output, Logic, Delay, Alarm",
            "ID, Local, Remote, Status, Error"
        ],
        correct: 0,
        explanation: "Um módulo de função consiste em nome da tag, símbolo, terminais, algoritmo e parâmetros."
    },
    {
        id: 17,
        question: "Como exibir os parâmetros de um módulo de função?",
        options: [
            "Duplo clique no símbolo",
            "Arrastar o símbolo para o topo",
            "Botão direito -> Context menu -> Parameter view",
            "Pressionar F2"
        ],
        correct: 2,
        explanation: "O acesso aos parâmetros é feito pelo menu de contexto (botão direito do mouse)."
    },
    {
        id: 18,
        question: "O que significa quando o símbolo de uma bomba está piscando em cinza?",
        options: [
            "Operação normal",
            "Status mudando, transiente ou parando",
            "Erro de comunicação",
            "Standby ativo"
        ],
        correct: 1,
        explanation: "O cinza piscante indica que a bomba está em transição de estado (mudando de status)."
    },
    {
        id: 19,
        question: "Qual é o significado da Tag Mark 'm'?",
        options: ["Mudo", "Manutenção", "Manual", "Máximo"],
        correct: 2,
        explanation: "A letra 'm' indica que o módulo está em modo Manual."
    },
    {
        id: 20,
        question: "O que representa a Tag Mark 's'?",
        options: ["Start", "Standby", "Trip / Shutdown", "Simulação"],
        correct: 2,
        explanation: "A letra 's' é usada para indicar um Trip ou desligamento (Shutdown)."
    },
    {
        id: 21,
        question: "O que representa a Tag Mark 'I'?",
        options: ["Informação", "Interlock", "Input Error", "Interno"],
        correct: 1,
        explanation: "A letra 'I' indica que há um intertravamento (Interlock) ativo."
    },
    {
        id: 22,
        question: "O que representa a Tag Mark 'L'?",
        options: ["Low (Baixo)", "Locked (Travado)", "Local", "Limit (Limite)"],
        correct: 2,
        explanation: "A letra 'L' indica que o controle está no modo Local."
    },
    {
        id: 23,
        question: "Onde o sistema exibe o nome da imagem de processo aberta?",
        options: [
            "No canto inferior direito",
            "Na barra de título, no topo e centro da página",
            "Dentro do menu de ajuda",
            "No Navigator apenas"
        ],
        correct: 1,
        explanation: "O nome aparece na barra de título centralizada no topo da página."
    },
    {
        id: 24,
        question: "Qual era o valor do 'Timeout limit' da válvula SOV-112553 no exercício?",
        options: ["10 segundos", "45 segundos", "92 segundos", "120 segundos"],
        correct: 2,
        explanation: "Conforme a visualização de parâmetros, o limite é de 92 segundos."
    },
    {
        id: 25,
        question: "O que indica o valor '0' no terminal Error de um módulo?",
        options: ["Erro fatal", "Sem erros no módulo", "Falha de leitura", "Valor de fábrica"],
        correct: 1,
        explanation: "O valor zero significa que não há erros detectados no módulo."
    },
    {
        id: 26,
        question: "Como identificar quais Command Groups sua estação controla?",
        options: [
            "Pela cor do monitor",
            "Ícone de Status na Tool bar (pastas verdes)",
            "Usando a tecla F1",
            "Verificando a History Station"
        ],
        correct: 1,
        explanation: "Pastas verdes na lista da toolbar indicam grupos sob comando da estação."
    },
    {
        id: 27,
        question: "Qual Tag Mark indica modo automático?",
        options: ["m", "s", "a", "I"],
        correct: 2,
        explanation: "O modo automático é indicado pela letra 'a'."
    },
    {
        id: 28,
        question: "O que acontece ao usar a ferramenta 'Find Tag'?",
        options: [
            "O sistema abre o manual",
            "O sistema destaca o módulo com um quadro vermelho",
            "A bomba selecionada para",
            "Gera-se um relatório"
        ],
        correct: 1,
        explanation: "A ferramenta Find Tag destaca o local da tag com uma moldura vermelha."
    },
    {
        id: 29,
        question: "O que o sistema exibe ao pairar o mouse sobre um módulo?",
        options: [
            "Nada",
            "Tag name, descrição e controle de comando",
            "O valor da temperatura apenas",
            "Abre a janela de parâmetros"
        ],
        correct: 1,
        explanation: "Ao pairar o mouse, o sistema exibe informações rápidas como Tag name e descrição."
    },
    {
        id: 30,
        question: "Quais as cores da válvula para Aberta, Fechada e Transição?",
        options: [
            "Azul, Vermelho e Amarelo",
            "Verde, Branco e Verde/Cinza piscante",
            "Preto, Branco e Cinza",
            "Verde, Vermelho e Laranja"
        ],
        correct: 1,
        explanation: "Verde para aberta, branco para fechada e piscante para transição."
    },
    {
        id: 31,
        question: "No Show Connection, o que indica o terminal OutRunning?",
        options: [
            "Erro de bomba",
            "Status de funcionamento (rodando)",
            "Velocidade",
            "Tempo de uso"
        ],
        correct: 1,
        explanation: "OutRunning indica se a unidade está operando (rodando)."
    },
    {
        id: 32,
        question: "Qual a diferença entre alarme Desativado (Disabled) e Suprimido (Suppressed)?",
        options: [
            "Desativado é pelo sistema; Suprimido é pelo operador",
            "Desativado é pelo operador; Suprimido é pelo sistema",
            "São a mesma coisa",
            "Suprimido apaga o histórico"
        ],
        correct: 1,
        explanation: "Disabled é uma ação do operador; Suppressed é uma lógica do sistema."
    },
    {
        id: 33,
        question: "O que acontece ao colocar um módulo em modo Passivo?",
        options: [
            "O símbolo some",
            "Fica marrom",
            "Fica verde",
            "O alarme soa mais alto"
        ],
        correct: 1,
        explanation: "Quando em modo passivo, o módulo ou Tagmark assume a cor marrom."
    },
    {
        id: 34,
        question: "O que indica um fundo de medição analógica na cor Oliva?",
        options: [
            "Alarme Crítico",
            "Desativado (DA/DI/DO)",
            "Simulação Ativa",
            "Valor Forçado"
        ],
        correct: 1,
        explanation: "O fundo oliva indica configurações de Disabled (DA/DI/DO)."
    },
    {
        id: 35,
        question: "O que indica um fundo ciano em uma medição?",
        options: [
            "Erro de rede",
            "Alarme Suprimido ou Simulado (SA/IN/OV)",
            "Prioridade 1",
            "Fora de escala"
        ],
        correct: 1,
        explanation: "Fundo ciano indica estados como suprimido (IN) ou simulação ativa (SA)."
    },
    {
        id: 36,
        question: "É recomendado usar Simulação (SA) ou Entrada Alternativa (AI) a bordo?",
        options: ["Sim, diariamente", "Apenas em navegação", "NUNCA!", "Apenas o Comandante pode"],
        correct: 2,
        explanation: "O manual afirma categoricamente que NUNCA devem ser usados em operação normal."
    },
    {
        id: 37,
        question: "Uma Floating Image estará disponível após reiniciar a OS?",
        options: ["Sim", "Não", "Apenas se for de alarmes", "Apenas se salva no SQL"],
        correct: 1,
        explanation: "Janelas flutuantes (Floating Images) não estão disponíveis após o reinício do sistema."
    },
    {
        id: 38,
        question: "As janelas flutuantes aparecem em outras estações?",
        options: [
            "Sim, em todas",
            "Não, são locais",
            "Apenas na HS",
            "Apenas se configurado como 'Global'"
        ],
        correct: 1,
        explanation: "As janelas flutuantes são configuradas e exibidas apenas na OS local."
    },
    {
        id: 39,
        question: "As Reminder Notes são visíveis em outras estações?",
        options: [
            "Não",
            "Sim",
            "Apenas para o Administrador",
            "Apenas se o alarme tocar"
        ],
        correct: 1,
        explanation: "Sim, as notas de lembrete (Reminder Notes) são visíveis em todo o sistema."
    },
    {
        id: 40,
        question: "Quem pode deletar uma Reminder Note?",
        options: [
            "Apenas o criador",
            "Apenas o administrador",
            "Qualquer pessoa (mesmo de outros grupos de OS)",
            "Ninguém"
        ],
        correct: 2,
        explanation: "Qualquer usuário pode deletar as notas de lembrete, independentemente de quem as criou."
    },
    {
        id: 41,
        question: "Qual o tipo de RIO conectado ao terminal StopLS no exercício?",
        options: ["HUB100", "RMP420", "PS047", "RCU500"],
        correct: 1,
        explanation: "O terminal usa uma unidade RMP420."
    },
    {
        id: 42,
        question: "O que indica o símbolo ( ~ ) em um canal de RIO?",
        options: [
            "Corrente alternada",
            "Sinal invertido",
            "Falha de canal",
            "Aproximação"
        ],
        correct: 1,
        explanation: "O símbolo ~ indica que a lógica está invertida no canal."
    },
    {
        id: 43,
        question: "No Flexi-module, o que indica o número ao lado da lógica (ex: '7')?",
        options: [
            "Número de entradas",
            "Ordem de execução da lógica",
            "Prioridade do alarme",
            "Quantidade de erros"
        ],
        correct: 1,
        explanation: "O número define a sequência de execução da lógica."
    },
    {
        id: 44,
        question: "No sistema de lastro, o que representam as letras 'L' e 'H'?",
        options: [
            "Left e Half",
            "Low e High speed (velocidade)",
            "Level e Heat",
            "Locked e Heaving"
        ],
        correct: 1,
        explanation: "Indicam operação em baixa (Low) ou alta (High) velocidade."
    },
    {
        id: 45,
        question: "Como um alarme não reconhecido é exibido na Lista de Eventos?",
        options: [
            "Texto em azul",
            "Asterisco (*) na coluna esquerda",
            "Ponto de interrogação (?)",
            "Fundo piscante preto"
        ],
        correct: 1,
        explanation: "O asterisco (*) indica que o alarme ainda não foi reconhecido."
    },
    {
        id: 46,
        question: "Qual a cor para alarme de Prioridade 1 (Baixa)?",
        options: ["Amarelo", "Vermelho", "Magenta", "Cinza"],
        correct: 0,
        explanation: "Prioridade 1 (baixa) é exibida em amarelo."
    },
    {
        id: 47,
        question: "Qual a cor para alarme de Prioridade 2 (Alta)?",
        options: ["Branco", "Amarelo", "Vermelho", "Rosa"],
        correct: 2,
        explanation: "Prioridade 2 (alta) é exibida em vermelho."
    },
    {
        id: 48,
        question: "Qual a cor para alarme de Prioridade 3 (Crítica)?",
        options: ["Vermelho", "Magenta", "Amarelo pálido", "Azul"],
        correct: 1,
        explanation: "Prioridade 3 (emergência/crítica) é exibida em magenta."
    },
    {
        id: 49,
        question: "Quais os dois tipos principais de alarmes na Lista de Eventos?",
        options: [
            "Bombas e Motores",
            "Processo e Sistema",
            "Locais e Remotos",
            "Manuais e Automáticos"
        ],
        correct: 1,
        explanation: "O sistema separa entre Process alarms (alarmes de processo) e System alarms (alarmes de sistema)."
    },
    {
        id: 50,
        question: "Quando a 'Last Alarm Line' fica vazia?",
        options: [
            "Nunca",
            "Ao reiniciar o sistema",
            "Quando não há alarmes não reconhecidos",
            "Quando todos os motores param"
        ],
        correct: 2,
        explanation: "A Last Alarm Line fica vazia quando não há mais alarmes pendentes de reconhecimento."
    },
    {
        id: 51,
        question: "O que ocorre ao pressionar o botão de reconhecer sem selecionar um alarme?",
        options: [
            "Nada",
            "Reconhece todos os alarmes da página atual",
            "Reconhece apenas o mais recente",
            "Abre o menu de ajuda"
        ],
        correct: 1,
        explanation: "O sistema reconhece todos os alarmes visualizados naquela página."
    },
    {
        id: 52,
        question: "O que acontece ao arquivar (Shelve) um alarme?",
        options: [
            "Ele é deletado",
            "Desaparece temporariamente da lista e do módulo",
            "Muda para Prioridade 3",
            "O som fica mudo para sempre"
        ],
        correct: 1,
        explanation: "O arquivamento (Shelve) oculta o alarme temporariamente da lista e do módulo."
    },
    {
        id: 53,
        question: "O que ocorre após o tempo de expiração do arquivamento?",
        options: [
            "O alarme reaparece",
            "O alarme é arquivado permanentemente",
            "O sistema desliga",
            "O filtro muda para Default"
        ],
        correct: 0,
        explanation: "Após o tempo de expiração (ex: 2 minutos), o alarme reaparece no módulo e na lista."
    },
    {
        id: 54,
        question: "Qual é o filtro de alarme ativo por padrão?",
        options: ["Global", "Default", "Power", "None"],
        correct: 1,
        explanation: "O filtro 'Default' é o filtro padrão inicial do sistema."
    },
    {
        id: 55,
        question: "O que acontece se ativar o 'Power Filter'?",
        options: [
            "O monitor desliga",
            "Apenas alarmes do grupo de comando Power e alguns de sistema ficam visíveis",
            "Todos os alarmes somem",
            "A velocidade da rede aumenta"
        ],
        correct: 1,
        explanation: "O Power Filter isola e mostra apenas alarmes do grupo Power e alguns alarmes de sistema."
    },
    {
        id: 56,
        question: "Onde ver todos os eventos dos últimos 4 dias?",
        options: [
            "Página de Status",
            "Historic Event Page (ícone do relógio)",
            "Navigator -> Recent",
            "Manual do usuário"
        ],
        correct: 1,
        explanation: "O histórico de eventos é acessado pela Historic Event Page (ícone do relógio)."
    },
    {
        id: 57,
        question: "Qual a diferença entre limites de Alarme e de Sinal?",
        options: [
            "Nenhuma",
            "Alarme é para o operador; Sinal é para ações automáticas no processo",
            "Sinal é apenas para motores",
            "Alarmes param o motor imediatamente"
        ],
        correct: 1,
        explanation: "Alarmes informam o operador; sinais acionam lógicas automáticas no sistema."
    },
    {
        id: 58,
        question: "O que é o 'Deadband' em um alarme analógico?",
        options: [
            "Tempo de atraso",
            "Faixa de tolerância para evitar oscilações na ativação/limpeza do alarme",
            "O limite máximo do sensor",
            "A cor da linha de tendência"
        ],
        correct: 1,
        explanation: "O deadband é uma faixa de tolerância que evita disparos repetidos se o valor oscilar próximo ao limite."
    },
    {
        id: 59,
        question: "Se você desativar um alarme suprimido manualmente, o sistema o reativará?",
        options: [
            "Não",
            "Sim, após 10 minutos",
            "Sim, ao fazer logoff",
            "Sim, após 1 hora"
        ],
        correct: 1,
        explanation: "Por segurança, o sistema reabilita automaticamente o alarme após 10 minutos."
    },
    {
        id: 60,
        question: "No diagrama C&E (Safety), o que o símbolo 'X' indica?",
        options: [
            "Saída desativada",
            "Saída ativa imediatamente quando a entrada está ativa",
            "Erro de canal",
            "Bloqueio manual"
        ],
        correct: 1,
        explanation: "O 'X' significa ação imediata sem retardo no diagrama C&E."
    },
    {
        id: 61,
        question: "No diagrama C&E, o que o número '4' em um quadro representa?",
        options: [
            "Prioridade 4",
            "Atraso de 2 minutos (delay)",
            "Quatro sensores falharam",
            "Quarta zona de incêndio"
        ],
        correct: 1,
        explanation: "Números no diagrama C&E indicam retardos de tempo específicos (4 = 2 minutos)."
    },
    {
        id: 62,
        question: "Qual a indicação visual de um detector inibido (Inhibit)?",
        options: [
            "Vermelho",
            "Detector ciano e um 'O' com fundo ciano",
            "Símbolo piscante",
            "Símbolo desaparece"
        ],
        correct: 1,
        explanation: "A inibição é sinalizada pela cor ciano e pela letra 'O' com fundo ciano."
    },
    {
        id: 63,
        question: "O que acontece se um alarme de gás de 20% LEL não for reconhecido após 2 min?",
        options: [
            "O alarme limpa sozinho",
            "Full alarm (alarme total) e efeitos são disparados",
            "A PS reinicia",
            "O detector desliga"
        ],
        correct: 1,
        explanation: "A falta de reconhecimento leva à ativação de todas as contramedidas (full alarm)."
    },
    {
        id: 64,
        question: "Qual botão no C&E retorna os efeitos ao normal após as causas serem limpas?",
        options: ["Clear", "Reset", "Acknowledge", "Stop"],
        correct: 1,
        explanation: "O botão Reset limpa os efeitos travados no diagrama C&E."
    },
    {
        id: 65,
        question: "Qual terminal é usado para o desligamento forçado de uma bomba?",
        options: ["OutRunning", "ShutDown (ou PmpSD)", "ErrorCode", "ControlStart"],
        correct: 1,
        explanation: "O terminal ShutDown (PmpSD) recebe o comando de parada de segurança."
    },
    {
        id: 66,
        question: "O que é necessário para operar a imagem Thruster_3?",
        options: [
            "Modo de ancoragem",
            "Ativar Maintenance Mode e ter comando",
            "Senha master",
            "Parar os geradores"
        ],
        correct: 1,
        explanation: "Requer habilitar o modo de manutenção (Maintenance Mode) para controle via K-Chief."
    },
    {
        id: 67,
        question: "Qual a cor da moldura no Sequence Administrator indicando que uma sequência está rodando?",
        options: ["Vermelha", "Verde", "Cinza", "Azul"],
        correct: 1,
        explanation: "Uma borda verde sinaliza que a sequência está ativa."
    },
    {
        id: 68,
        question: "O que significa a moldura Ciano no Sequence Administrator?",
        options: ["Finalizada", "Em espera (Hold)", "Falha", "Modo manual"],
        correct: 1,
        explanation: "Ciano indica que a sequência foi colocada em espera (Hold)."
    },
    {
        id: 69,
        question: "O que o comando 'Terminate' faz em uma sequência?",
        options: [
            "Pausa",
            "Para a sequência completamente",
            "Pula para o fim",
            "Reinicia a OS"
        ],
        correct: 1,
        explanation: "Terminate interrompe completamente o processamento da sequência."
    },
    {
        id: 70,
        question: "O que indica uma moldura Vermelha no Sequence Administrator?",
        options: [
            "Emergência",
            "Falha (fault) na sequência",
            "Não iniciada",
            "Acesso negado"
        ],
        correct: 1,
        explanation: "Moldura vermelha indica uma falha (fault) que impede o progresso da sequência."
    },
    {
        id: 71,
        question: "Qual a diferença entre START e START AUX para os Thrusters?",
        options: [
            "START inicia tudo; START AUX apenas auxiliares",
            "Não há diferença",
            "START AUX é para testes",
            "START é manual"
        ],
        correct: 0,
        explanation: "START inicia todo o sistema; START AUX inicia apenas os auxiliares."
    },
    {
        id: 72,
        question: "Quais os quatro modos de carga do gerador (PMS)?",
        options: [
            "Auto, Semi, Manual, Stop",
            "Manual, Fix, Symmetric, Asymmetric",
            "Low, Medium, High, Max",
            "Start, Run, Standby, Trip"
        ],
        correct: 1,
        explanation: "Os modos de operação para gestão de carga são: Manual, Fix, Symmetric e Asymmetric."
    },
    {
        id: 73,
        question: "Qual modo NÃO é usado para compartilhamento de carga ativo pelo K-Chief?",
        options: ["Symmetric", "Manual", "Asymmetric", "Fix"],
        correct: 1,
        explanation: "No modo Manual, o sistema não balanceia a carga automaticamente."
    },
    {
        id: 74,
        question: "Onde encontrar informações sobre kW usado e disponível?",
        options: [
            "Manual impresso",
            "Em cada switchboard individual (Swbd)",
            "Apenas na HS",
            "Menu Help"
        ],
        correct: 1,
        explanation: "Os dados de carga estão disponíveis nos respectivos Switchboards."
    },
    {
        id: 75,
        question: "Em quantas partes o barramento principal (main bus) pode ser dividido?",
        options: ["2", "4", "6", "10"],
        correct: 2,
        explanation: "O barramento principal pode ser segmentado em 6 partes (uma por switchboard)."
    },
    {
        id: 76,
        question: "Por que o DG1C estava impedido de desconectar (Inh.Disconn) no exercício?",
        options: [
            "Falha de disjuntor",
            "Era o único gerador rodando naquele switchboard",
            "Modo manual",
            "Falta de combustível"
        ],
        correct: 1,
        explanation: "O sistema impede o desligamento do último gerador para evitar blackout."
    },
    {
        id: 77,
        question: "O que acontece se o barramento estiver intertravado (interlocked)?",
        options: [
            "Explosão",
            "O fechamento do disjuntor é impedido",
            "Modo emergência",
            "Frequência sobe"
        ],
        correct: 1,
        explanation: "Intertravamentos impedem conexões inseguras no barramento."
    },
    {
        id: 78,
        question: "A que limite de carga o gerador reserva partirá automaticamente?",
        options: [
            "Quando o online ultrapassar 70%",
            "Apenas manualmente",
            "Carga 100%",
            "Queda de 10% na voltagem"
        ],
        correct: 0,
        explanation: "O PMS inicia geradores automaticamente quando a carga atinge 70% da capacidade."
    },
    {
        id: 79,
        question: "O que o botão 'C' faz na página de simulação (SimPage)?",
        options: [
            "Limpa tela",
            "Simula um desligamento (Trip) de gerador",
            "Conecta disjuntores",
            "Muda a cor"
        ],
        correct: 1,
        explanation: "O botão C é usado para testar a resposta do sistema simulando falhas (trip de gerador)."
    },
    {
        id: 80,
        question: "Como abrir uma tendência (Trend) como um Pop-Up?",
        options: [
            "F2",
            "Menu de contexto dentro da tendência -> 'make popup'",
            "Arrastar",
            "Não é possível"
        ],
        correct: 1,
        explanation: "O menu de contexto permite criar uma janela flutuante da tendência com a opção 'make popup'."
    },
    {
        id: 81,
        question: "Qual ferramenta mede o valor exato de uma curva no Trend?",
        options: [
            "Régua de Medição (Measurement Ruler)",
            "Lupa",
            "Calculadora",
            "Cronômetro"
        ],
        correct: 0,
        explanation: "A régua de medição (Measurement Ruler) permite leitura precisa de valores no tempo."
    },
    {
        id: 82,
        question: "O que significa o asterisco (*) ao lado do nome de uma nova imagem?",
        options: [
            "Favorita",
            "Com alarme",
            "Não salva",
            "Protegida"
        ],
        correct: 2,
        explanation: "O asterisco indica que há alterações pendentes que não foram salvas."
    },
    {
        id: 83,
        question: "É possível dividir uma janela de tendência em várias visualizações?",
        options: [
            "Não",
            "Sim, usando o Layout mode",
            "Só em telas de 30 polegadas",
            "Só para lastro"
        ],
        correct: 1,
        explanation: "O Layout Mode permite dividir a janela de tendência em várias visualizações horizontais e verticais."
    },
    {
        id: 84,
        question: "Qual template é usado para o relatório do exercício 30?",
        options: ["SimpleList", "GroupedList", "AlarmReport", "DailyLog"],
        correct: 1,
        explanation: "O template selecionado para o exercício foi o GroupedList."
    },
    {
        id: 85,
        question: "Com que frequência o relatório foi agendado?",
        options: [
            "A cada hora",
            "Todo dia ao meio-dia",
            "Semanalmente",
            "Manualmente"
        ],
        correct: 1,
        explanation: "O agendamento foi configurado para diariamente ao meio-dia."
    },
    {
        id: 86,
        question: "Qual é a cor para alarme de prioridade 0 (sem prioridade)?",
        options: ["Vermelho", "Amarelo pálido", "Branco", "Verde"],
        correct: 1,
        explanation: "Alarmes de Prioridade 0 (sem prioridade) são exibidos em amarelo pálido."
    },
    {
        id: 87,
        question: "O que significa LEL?",
        options: [
            "Low Energy Level",
            "Lower Explosive Limit",
            "Logic Error Log",
            "Liquid Entry Level"
        ],
        correct: 1,
        explanation: "LEL significa Lower Explosive Limit (Limite Inferior de Explosividade) em detectores de gás."
    },
    {
        id: 88,
        question: "O que o modo Symmetric Load Sharing faz?",
        options: [
            "Divide a carga igualmente em percentual entre geradores",
            "Deixa um gerador em 100%",
            "Desliga geradores pequenos",
            "Apenas para emergência"
        ],
        correct: 0,
        explanation: "O modo Symmetric equilibra a carga percentual entre todas as unidades ativas."
    },
    {
        id: 89,
        question: "O que é o modo Asymmetric Load Sharing?",
        options: [
            "Divisão igual",
            "Geradores operam com cargas percentuais diferentes",
            "Somente para geradores de porto",
            "Quando os geradores estão desligados"
        ],
        correct: 1,
        explanation: "Asymmetric Load Sharing permite que geradores contribuam de forma desigual para a carga total."
    },
    {
        id: 90,
        question: "O que o comando 'Hold' faz em uma sequência?",
        options: [
            "Deleta",
            "Pausa temporariamente",
            "Acelera",
            "Inverte os passos"
        ],
        correct: 1,
        explanation: "Hold pausa temporariamente a sequência, mantendo-a no estado atual sem progredir."
    },
    {
        id: 91,
        question: "Onde se encontra o 'User Guide' no sistema?",
        options: [
            "No manual impresso apenas",
            "Ícone de ajuda (?) na barra de ferramentas ou tecla F1",
            "No History Station",
            "No menu File"
        ],
        correct: 1,
        explanation: "O guia do usuário é acessado pelo ícone de interrogação (?) na barra de ferramentas ou pela tecla F1."
    },
    {
        id: 92,
        question: "O que acontece se um gerador DG1P sofre um Trip no exercício?",
        options: [
            "O sistema para",
            "O próximo gerador na sequência inicia",
            "A OS reinicia",
            "Nada acontece"
        ],
        correct: 1,
        explanation: "O PMS gerencia a falha automaticamente e inicia o próximo gerador disponível na sequência."
    },
    {
        id: 93,
        question: "Como silenciar o alarme de perda de controle (buzzer) nos Thrusters?",
        options: [
            "Desligar o monitor",
            "Botão SILENCE no UTILITY PANEL",
            "Pressionar F2",
            "Tirar o cabo da rede"
        ],
        correct: 1,
        explanation: "O buzzer é silenciado pelo botão SILENCE no painel de utilidades (UTILITY PANEL)."
    },
    {
        id: 94,
        question: "O que o símbolo 'O' ciano indica nos níveis de imagem de segurança?",
        options: [
            "Operação normal",
            "Override ou Inhibit ativo naquele nível",
            "Alarme de fumaça",
            "Óleo detectado"
        ],
        correct: 1,
        explanation: "O símbolo 'O' ciano indica que há um Override/Inhibit ativo em algum sensor daquela área."
    },
    {
        id: 95,
        question: "Qual é a tensão típica dos geradores lida no exercício?",
        options: ["440V", "11kV", "220V", "12V"],
        correct: 1,
        explanation: "Os geradores (ex: DG1P) operam em 11kV (11.000 volts)."
    },
    {
        id: 96,
        question: "Para que serve o botão 'Pin' nos menus de operador?",
        options: [
            "Para deletar o menu",
            "Para manter o menu fixo/aberto na tela",
            "Para fechar todas as janelas",
            "Para travar a bomba"
        ],
        correct: 1,
        explanation: "O botão 'Pin' permite que o menu permaneça visível fixo na tela enquanto se opera outras áreas."
    },
    {
        id: 97,
        question: "O que o terminal 'HourCount' mostra em uma bomba?",
        options: [
            "Quantos alarmes ocorreram",
            "Horas totais de funcionamento",
            "Tempo para a próxima manutenção",
            "Hora atual do sistema"
        ],
        correct: 1,
        explanation: "HourCount mostra o contador de horas de operação da unidade (horímetro)."
    },
    {
        id: 98,
        question: "As janelas de tendência podem ser acessadas pelo Navigator?",
        options: [
            "Sim",
            "Não, apenas por bombas",
            "Apenas o administrador pode",
            "Apenas via F1"
        ],
        correct: 0,
        explanation: "Sim, as tendências podem ser abertas via Navigator ou menus de contexto."
    },
    {
        id: 99,
        question: "O que é 'Time Series' no K-Chief 700?",
        options: [
            "Um tipo de relógio",
            "Armazenamento de valores de terminais ao longo do tempo",
            "Uma sequência de comandos",
            "O manual do usuário"
        ],
        correct: 1,
        explanation: "Time Series refere-se aos dados históricos armazenados na HS (valores de terminais ao longo do tempo)."
    },
    {
        id: 100,
        question: "Qual o passo final recomendado após completar todos os exercícios?",
        options: [
            "Reiniciar o navio",
            "Nenhuma ação necessária",
            'Well done -- all exercises are completed',
            "Formatar o History Station"
        ],
        correct: 2,
        explanation: "Esta é a mensagem final de conclusão do guia de exercícios do K-Chief 700."
    }
];

// Exportar para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS_DB;
}