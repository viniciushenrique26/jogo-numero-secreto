const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; 
const recognition = new SpeechRecognition(); 

recognition.lang = 'pt-Br' 
recognition.start()

recognition.addEventListener('result', onSpeak) 

function onSpeak (e) { 
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute) 
  verificaSeOChutePossuiUmValorValido(chute)
  gameOver(chute)
} 
function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse</div> 
    <span class="box">${chute}</span>
  `
} 
function gameOver(chute) { 
  if (chute === 'quero mais jogar não') { 

    elementoChute.innerHTML = `
    <h2>Fim de Jogo!</h2> 
    <h3>Pressione o botão para jogar novamente</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    ` 
    document.body.style.backgroundColor = "black";  
    document.body.style.color = "white";
  }  
    
}  



recognition.addEventListener('end', () => recognition.start())  
