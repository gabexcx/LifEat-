// Adiciona um "ouvinte de eventos" que espera o documento HTML ser completamente carregado antes de executar o código dentro dele.
document.addEventListener('DOMContentLoaded', () => {

    // Pega o elemento do formulário pelo seu 'id' e o armazena na constante 'signupForm'.
    const signupForm = document.getElementById('signupForm');

    // Adiciona um "ouvinte de eventos" ao formulário que será acionado quando o usuário tentar enviá-lo (clicando no botão "submit").
    signupForm.addEventListener('submit', (event) => {
        
        // Impede o comportamento padrão do navegador de recarregar a página ao enviar um formulário.
        // Isso nos permite controlar o que acontece com JavaScript.
        event.preventDefault(); 

        // Pega o valor atual de cada campo do formulário e armazena em constantes.
        const cadastroType = document.getElementById('cadastroType').value; // O valor da opção selecionada
        const nome = document.getElementById('nome').value;                 // O texto digitado no campo nome
        const email = document.getElementById('email').value;               // O texto digitado no campo e-mail
        const senha = document.getElementById('senha').value;               // O texto digitado no campo senha
        const confirmSenha = document.getElementById('confirmSenha').value; // O texto digitado no campo de confirmação de senha

        // --- Início das Validações ---

        // Verifica se o campo "tipo de cadastro" não foi selecionado (se o valor está vazio).
        if (!cadastroType) {
            alert('Por favor, selecione o tipo de cadastro.'); // Mostra um alerta para o usuário.
            return; // Para a execução da função aqui se a condição for verdadeira.
        }
        
        // Verifica se o campo nome está vazio (após remover espaços em branco do início e fim com .trim()).
        if (nome.trim() === '') {
            alert('Por favor, preencha o seu nome.');
            return;
        }

        // Verifica se a senha tem menos de 6 caracteres.
        if (senha.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            return;
        }
        
        // Verifica se o valor do campo "senha" é diferente do campo "confirmar senha".
        if (senha !== confirmSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        // --- Fim das Validações ---

        // Se o código chegou até aqui, significa que todas as validações passaram.
        // Mostra um alerta de sucesso, usando uma template string (`) para incluir os valores das variáveis no texto.
        alert(`Cadastro para "${nome}" realizado com sucesso como "${cadastroType}"!`);
        
        // Limpa todos os campos do formulário, deixando-o pronto para um novo preenchimento.
        signupForm.reset(); 
    });
});