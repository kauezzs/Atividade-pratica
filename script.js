let formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;
    let perfil = document.getElementById("perfil").value;
    let termos = document.getElementById("termos").checked;
    let mensagem = document.getElementById("mensagem");

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    if (senha !== confirmaSenha) {
        mensagem.textContent = "As senhas não são iguais.";
        return;
    }

    if (!termos) {
        mensagem.textContent = "Você precisa aceitar os termos de uso.";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Perfil:", perfil);
});