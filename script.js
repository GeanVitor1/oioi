document.addEventListener('DOMContentLoaded', function() {
    var aceitarButton = document.getElementById('aceitar-button');
    aceitarButton.addEventListener('click', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    var nomeInput = document.querySelector('input[name="nome"]');
    var amorInput = document.querySelector('input[name="amor"]');
    var nomeError = document.getElementById('nome-error');
    var amorError = document.getElementById('amor-error');

    var nome = nomeInput.value.toLowerCase();
    var amor = amorInput.value.trim();

    if (nome !== "sabrina mendes de jesus vasques") {
        nomeError.textContent = "Digite o nome correto da Minha Mulher Rapá.";
        return false;
    } else {
        nomeError.textContent = "";
    }

    if (amor !== "10") {
        amorError.textContent = "Me ama tão pouco ? OPORRA.";
        return false;
    } else {
        amorError.textContent = "";
    }

    window.location.href = "pagina.html";
    return false;
}
