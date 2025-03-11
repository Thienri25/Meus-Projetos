let jogosAlugados = 1;

function ContarJogosAlugados(){
    console.log(`a quantidaade de jogos alugados é ${JogosAlugados}`)
}




function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let Result=parseInt(prompt("voce quer devolver o jogo? confirme pressionando 1 ou cancele pressionando 2"));
        if(Result == 1){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        JogosAlugados--
        } 
        
        
        }
        else {
            let Result=parseInt(prompt("voce deseja alugar este jogo? pressione 1 para confirmar para cancelar digite 2 "));
            if (Result==1){
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        JogosAlugados++


    }

}
ContarJogosAlugados();
}
