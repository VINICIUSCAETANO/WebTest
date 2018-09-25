const button = document.querySelector("button");
button.onclick = function () {
    const inputs = document.querySelectorAll("input.form-control");

    for (let input of inputs) {
        if (input.id === "nome") {
            verificaNome(input.value);
        } else if (input.id === "email") {
            verificaEmail(input.value);
        } else if (input.id === "telefone") {
            verificaTel(input.value);
        } else if (input.id === "mensagem") {
            verificaMensagem(input.value);
        }
    }
}

function verificaNome(input) {
    if (input === "") {
        alert("Insira o nome corretamente");
        return;
    }
}

function verificaEmail(input) {
    if (input === "") {
        alert("Insira o e-mail corretamente");
        return;
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input)) {
        alert("Insira o e-mail corretamente");
        return;
    }
}

function verificaTel(input) {
    if (input === "") {
        alert("Insira o telefone corretamente");
        return;
    }

    if (input.lenght > 20 || input.lengh < 8) {
        alert("Insira o telefone corretamente");
        return;
    }

    let ver = true;
    for (let char of input) {
        if (isNaN(char)) {
            ver = false;
        }
    }
    if (!ver) {
        alert("Insira o telefone corretamente");
        return;
    }
}

function verificaMensagem(input) {
    if (input === "") {
        alert("Insira uma mensagem");
        return;
    }
}