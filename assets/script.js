$(document).ready(function() {
    // Inicialmente mostrar o formulário de cadastro
    $("#registerForm").show();
    $("#loginForm").hide();

    console.log("Página carregada e script iniciado.");

    // Alternar para o formulário de cadastro
    $("#newUserButton").click(function() {
        $(".userForm").hide();
        $("#registerForm").show();
        console.log("Botão 'Sou novo por aqui' clicado.");
    });

    // Alternar para o formulário de login
    $("#loginButton").click(function() {
        $(".userForm").hide();
        $("#loginForm").show();
        console.log("Botão 'Já tenho cadastro' clicado.");
    });

    // Validação de campos para formulário de cadastro
    $("#registerForm").submit(function(event) {
        let isValid = true;
        if ($("#fullName").val() === "") {
            alert("O campo 'Nome Completo' deve ser preenchido!");
            isValid = false;
        }
        if ($("#cep").val() === "") {
            alert("O campo 'CEP' deve ser preenchido!");
            isValid = false;
        }
        if ($("#registerEmail").val() === "") {
            alert("O campo 'Email' deve ser preenchido!");
            isValid = false;
        }
        if ($("#registerPassword").val() === "") {
            alert("O campo 'Senha' deve ser preenchido!");
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault(); // Impede o envio do formulário
            console.log("Formulário de cadastro inválido.");
        } else {
            console.log("Formulário de cadastro válido.");
        }
    });

    // Validação de campos para formulário de login
    $("#loginForm").submit(function(event) {
        let isValid = true;
        if ($("#loginEmail").val() === "") {
            alert("O campo 'Email' deve ser preenchido!");
            isValid = false;
        }
        if ($("#loginPassword").val() === "") {
            alert("O campo 'Senha' deve ser preenchido!");
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault(); // Impede o envio do formulário
            console.log("Formulário de login inválido.");
        } else {
            console.log("Formulário de login válido.");
        }
    });
});
