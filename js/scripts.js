document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formPessoal');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Validação dos campos
        if (!validarFormulario()) {
            return; // Se a validação falhar, não envia o formulário
        }
        
        // Se tudo estiver válido, pode enviar o formulário
        alert('Formulário enviado com sucesso!');
        // form.submit(); // Descomente esta linha para enviar realmente o formulário
    });