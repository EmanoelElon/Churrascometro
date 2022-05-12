let inputAdultos = document.getElementById("adulto");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
  console.log("Calculando...");


  let adultos  = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao  = inputDuracao.value;


  qtdTotalCarne   = ((carnePP(duracao) * adultos) + ((carnePP(duracao) / 2) * criancas));
  qtdTotalCerveja = (cervejaPP(duracao) * adultos);
  qtdTotalBebidas   = ((bebidaPP(duracao) * adultos) + ((bebidaPP(duracao) / 2) * criancas));

  console.log("Total Carne: " + qtdTotalCarne + "Total Cerveja: " + qtdTotalCerveja);

  resultado.innerHTML = `
    <p>${qtdTotalCarne}g de Carne</p>
    <p>${qtdTotalCerveja}ml de Cerveja</p>
    <p>${qtdTotalBebidas}ml de Bebidas</p>
  `;

}

function carnePP(duracao){
  if(duracao >= 6){
    return 650;
  }else{
    return 400;
  }
}

function bebidaPP(duracao){
  if(duracao >= 6){
    return 1500;
  }else{
    return 1000;
  }
}

function cervejaPP(duracao){
  if(duracao >= 6){
    return 2000;
  }else{
    return 1200;
  }
}

