let numerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
limparCampo();
let tentativas = 1;



function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');  
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosLista = numerosSorteados.length;
    
    if(quantidadeNumerosLista == numeroLimite){
        numerosSorteados = [];
    }






    if (numerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroGerado);
        console.log(numerosSorteados);       
        return numeroGerado;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirMsgInicial(); 

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Ai vc meteu a boa!');            
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Descobriu o numero secreto com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo();  
    }

}











