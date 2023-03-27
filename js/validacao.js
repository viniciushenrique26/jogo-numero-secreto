function verificaSeOChutePossuiUmValorValido (chute) {
  const numero = +chute //tranformando o número em Inteiro

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor Inválido!</div>' 
    return
  } 
  if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML +=`<div>Valor Inválido: Fale um número de ${menorValor} e ${maiorValor}</div>`
   return
  }  

  if (numero === numeroSecreto) {
    document.body.innerHTML = ` 
      <h2>Você acertou!</h2> 
      <h3>O número secreto era ${numeroSecreto} </h3> 
      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `
  }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})
