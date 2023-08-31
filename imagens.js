//imagens e sons do jogo
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemDoAtor;
let imagemDaEstrada;

let somDaTrilha;
let somDoPonto;
let somDaColisao;

function preload(){
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoAtor = loadImage("ator-1.png");
  imagemCarro = loadImage("carro-1.png");
  imagemCarro2 = loadImage("carro-2.png");
  imagemCarro3 = loadImage("carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  somDaTrilha = loadSound("trilha.mp3");
  somDoPonto = loadSound("pontos.wav");
  somDaColisao = loadSound("colidiu.mp3");
}
