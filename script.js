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

