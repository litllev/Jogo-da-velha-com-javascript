let dropdownItem = document.getElementById('dropdown-item')
let statusDropdown = 1
let regras = document.getElementById('regras')
let listaDeRegras = document.getElementById('dropdown-item')

let posicoes = document.getElementsByClassName('piece')


function dropdown(){
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
let alguemGanhou
function adicionarIcone(elemento){
    if (contador % 2 === 0) {
        elemento.innerHTML = '<img src="./imagens/close-outline.svg" alt="Marcador X" data-icone="x">'
    }else{
        elemento.innerHTML = '<img src="./imagens/ellipse-outline.svg" alt="Marcador O" data-icone="o">'
    }
    contador += 1
    if(contador >= 5){
        //chamando a função de verificação apartir do ponto que ja pode haver uma vitoria
        verificar()
    }
}

function verificar(){
    //verificando se o usuario fez uma tripla em coluna
try {
    for(let i = 0; i<=8; i++){
        if (posicoes[i].childNodes[0].dataset.icone === posicoes[i+3].childNodes[0].dataset.icone && posicoes[i].childNodes[0].dataset.icone === posicoes[i+6].childNodes[0].dataset.icone) {
            return console.log(`O jogador ${posicoes[i].children[0].dataset.icone} ganhou!`)
        }
}
    
for(let j = 0; j<=8; j += 3){
    if (posicoes[j].dataset.icone === posicoes[j+1].dataset.icone === posicoes[j+2].dataset.icone) {
           return console.log(`O jogador ${posicoes[j].dataset.icone} ganhou!`)
        }
    }

if ((posicoes[0].dataset.icone === posicoes[4].dataset.icone === posicoes[8].dataset.icone) || 
    posicoes[2].dataset.icone === posicoes[4].dataset.icone === posicoes[6].dataset.icone) {
        return console.log(`O jogador ${posicoes[4]} ganhou!`)
    }
} catch (error) {
    
}
}
