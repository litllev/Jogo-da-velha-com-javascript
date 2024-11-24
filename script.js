let dropdownItem = document.getElementById('dropdown-item')
let statusDropdown = 1
let regras = document.getElementById('regras')
let listaDeRegras = document.getElementById('dropdown-item')

let posicoes = document.getElementsByClassName('piece')
let placar = document.getElementById('placar').children

//dropdown das regras do game
function dropdown(){
    //se desligado ao clicar então ligar
    //senao ligado ao clicar então desligar
    if(statusDropdown === 0){

        dropdownItem.style.display = 'block'
        statusDropdown = 1
        regras.innerHTML = 'Regras do jogo' + '<ion-icon name="caret-up-outline"></ion-icon>';
        listaDeRegras.style.animation = 'fadein 1s ease-out'

    }else{
        
        statusDropdown = 0
        regras.innerHTML = 'Regras do jogo' + '<ion-icon name="caret-down-outline"></ion-icon>'
        listaDeRegras.style.animation = 'fadeout 0.5s ease'
        setTimeout(()=> dropdownItem.style.display = 'none',400)
        

    }
    
}

// fazendo o game funcionar

// logica de quem está jogando se X ou O
// Pra saber quem está jogando vou ultilizar um contador, a partir do contador vai ser possivel saber de quem é a vez

let contador = 0
// contar a quantidade de vitorias ou empates dos jogadores
let x = 0
let o = 0
let empate = 0

//adicionar icone ao clicar
function adicionarIcone(elemento){
    if(elemento.innerHTML === ''){
        if (contador % 2 === 0) {
            elemento.innerHTML = '<img src="./imagens/close-outline.svg" alt="Marcador X" data-icone="x">'
        }else{
            elemento.innerHTML = '<img src="./imagens/ellipse-outline.svg" alt="Marcador O" data-icone="o">'
        }
        contador += 1
    }
    setTimeout(()=>{
        if(contador >= 5){
        //chamando a função de verificação apartir do ponto que ja pode haver uma vitoria
        verificar()
    }}, 100)
    
    //caso todos os espaços tenham sidos preenchidos e não haja vitoria
    setTimeout( ()=>{
        if(contador === 9){
        placar[2].innerHTML = 'Empates: ' + empate
        limparTela()
        alert(`Deu empate`)
        empate++}
    },100)
}

function verificar(){
    //verificando se o usuario fez uma tripla em coluna
    for(let i = 0; i<=8; i++){
            try {
                if (posicoes[i].childNodes[0].dataset.icone === posicoes[i+3].childNodes[0].dataset.icone && posicoes[i].childNodes[0].dataset.icone === posicoes[i+6].childNodes[0].dataset.icone) {
                    return fimDoJogo(posicoes[i].children[0].dataset.icone)
                }
            }catch (error) {
                
            }
            }
    // verificação de tripla nas linhas
    for (let j = 0; j <= 8; j += 3) {
        try {
            if (posicoes[j].childNodes[0].dataset.icone === posicoes[j+1].childNodes[0].dataset.icone && posicoes[j].childNodes[0].dataset.icone === posicoes[j+2].childNodes[0].dataset.icone) {
                return fimDoJogo(posicoes[j].children[0].dataset.icone)
            }
        }catch (error) {
            
        }
        }
        // verificação de tripla nas diagonais
            try{
                if (
                    posicoes[0].childNodes[0].dataset.icone === posicoes[4].childNodes[0].dataset.icone && 
                    posicoes[0].childNodes[0].dataset.icone === posicoes[8].childNodes[0].dataset.icone || 
                    posicoes[2].childNodes[0].dataset.icone === posicoes[4].childNodes[0].dataset.icone &&
                    posicoes[2].childNodes[0].dataset.icone === posicoes[6].childNodes[0].dataset.icone
                    ) {
                        return fimDoJogo(posicoes[4].children[0].dataset.icone)
                    }
        } catch(error){

        }
}

function fimDoJogo(jogador) {
    window.alert(`O jogador ${jogador} venceu`)
    if (jogador === 'x') {
        x++
        placar[0].innerHTML = 'Vitorias de x: ' + x
    } else {
        o++
        placar[1].innerHTML = 'Vitorias de o: ' + o
    }
    limparTela()
}


function limparTela(){
    contador = 0
    for (element of posicoes) {
        element.innerHTML = ''  
    }
}
