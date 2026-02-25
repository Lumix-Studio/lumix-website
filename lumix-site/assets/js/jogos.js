//simulação de notas que viram do BD

const avaliacoes = [5, 4, 3, 3, 5, 4, 5, 4];

function calcularmedia(lista){
    const soma = lista.reduce((acc, nota) => acc + nota, 0);
    return (soma / lista.length);

}

function gerarEstrelas(media){
    const estrelasConteiner = document.getElementById("estrelas");
    estrelasConteiner.innerHTML = "";

    const arredondando = Math.round(media);

    for ( let i = 1; i <= 5; i++){
        if(i <= arredondando){
            estrelasConteiner.innerHTML += "⭐";
        }else{
            estrelasConteiner.innerHTML += "☆";
        }
    }
}

const media = calcularmedia(avaliacoes);

document.getElementById("media").innerHTML = '(${media.toFixed(2)} / 5)';

gerarEstrelas(media);
// fim das avaliações bonitas

