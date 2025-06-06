const  botoes = document.querySelectorAll('.escolha');
const resultadoDiv = document.getElementById('resultado');
const reiniciarBtn = document.getElementById('reiniciar');

const opcoes = ['pedra', 'papel', 'tesoura'];

function escolhaComputador(){
    const randomIndex = Math.floor(Math.random() * 3);
    return opcoes[randomIndex];
}

function verificarResultado(jogador, computador){
    if (jogador === computador) return 'empate';
    if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ){
        return 'Você Venceu!';
    }else{
        return 'Você Perdeu!';
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const escolhaJogador = botao.dataset.escolha;
        const escolhaPC = escolhaComputador();
        const resultado = verificarResultado(escolhaJogador, escolhaPC);
        resultadoDiv.innerHTML = `
            Você escolheu: <strong>${escolhaJogador}</strong><br>
            Computador escolheu: <strong>${escolhaPC}</strong><br>
            <strong>${resultado}</strong>
        `;
    });
})
reiniciarBtn.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
});