// Certifique-se de que o JavaScript está executando após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe a mensagem de alerta
        const alertElement = document.getElementById('alert');
        alertElement.style.display = 'block';

        // Limpa os dados do formulário
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Desaparece a mensagem e redireciona após 2 segundos
        setTimeout(() => {
            alertElement.style.display = 'none';
            window.location.href = 'index.html'; // Redireciona para index.html
        }, 1500);
    });
});