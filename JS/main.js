var img1 = document.getElementById("imagem1");
var img2 = document.getElementById("imagem2");
img1.style.display = "none";
img2.style.display = "none";

function colocarImagem() {
    img1.style.display = "block";
    img2.style.display = "block";
}

function mudarImagem() {
    if (img1.src = "./imagens/greatball.png") {
        img1.src = "./imagens/greataberta.png";
    }
    
    if (img2.src = "./imagens/moonball.png") {
        img2.src = "./imagens/moonaberta.png";
    }

}