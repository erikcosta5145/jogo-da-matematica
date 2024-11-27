let pontuacao = 0;
let numero1, numero2, respostaCorreta, operador;

// Gera uma nova pergunta
function novaPergunta() {
    numero1 = Math.floor(Math.random() * 20) + 1; // Números de 1 a 20
    numero2 = Math.floor(Math.random() * 20) + 1;
    operador = Math.random() > 0.5 ? "+" : "-"; // Escolhe entre + ou -

    respostaCorreta = operador === "+" ? numero1 + numero2 : numero1 - numero2;

    document.getElementById('pergunta').innerText = `Quanto é ${numero1} ${operador} ${numero2}?`;
    document.getElementById('resposta').value = '';
}

document.getElementById('enviar').addEventListener('click', () => {
    const resposta = parseInt(document.getElementById('resposta').value);
    const resultado = document.getElementById('resultado');

    if (resposta === respostaCorreta) {
        pontuacao++;
        resultado.innerText = "Correto! 🎉";
        resultado.style.color = "green";
    } else {
        resultado.innerText = `Errado! A resposta era ${respostaCorreta}. 😢`;
        resultado.style.color = "red";
    }

    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
    novaPergunta();
});

// Inicia o jogo
novaPergunta();
