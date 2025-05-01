let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'()*+,-./:;<=>?@[^_`{|}~";
let novaSenha = "";

// Atualiza a exibição do tamanho da senha
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};

// Função para gerar a senha
function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Atualiza a variável novaSenha com a senha gerada
    novaSenha = pass;
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

// Função para copiar a senha para a área de transferência
function copyPassword() {
    navigator.clipboard.writeText(novaSenha)  // Copia o valor da variável novaSenha
        .then(() => {
            alert("Senha copiada com sucesso!");
        })
        .catch(err => {
            alert("Erro ao copiar a senha!");
        });
}

