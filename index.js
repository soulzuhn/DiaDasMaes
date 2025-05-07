const imagens = [
    "images/fotoMae.jpg",
    "images/fotoMaee.jpg",
    "images/mae3.jpg"
];
let indiceAtual = 0;

function mudarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) indiceAtual = imagens.length - 1;
    if (indiceAtual >= imagens.length) indiceAtual = 0;
    document.getElementById("foto-carousel").src = imagens[indiceAtual];
}


const mensagens = [
    "Você é minha inspiração todos os dias!",
    "Seu amor é o que me guia nos momentos difíceis.",
    "Mãe, você é meu porto seguro.",
    "Te amo mais do que palavras podem expressar.",
    "Obrigado por cada conselho, cada abraço, cada sorriso.",
    "Ser seu filho é meu maior presente.",
    "Você transforma o mundo com seu amor.",
    "Tudo o que sou, devo a você."
];

const cardsContainer = document.getElementById("cardsContainer");

mensagens.forEach((mensagem, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = mensagem;
    card.style.animationDelay = `${index * 0.2}s`; 
    cardsContainer.appendChild(card);
});
