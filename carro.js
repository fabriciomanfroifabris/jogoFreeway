//Variável geral yCarros
let yCarros = [40, 96, 150, 210, 270, 318];

//variável geral para velocidade dos carros
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.2, 2.3];

//variável geral xCarros
let xCarros = [600, 600, 600, -55, -55, -55];

//variáveis para tamanhos do carro
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
     image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
    }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}