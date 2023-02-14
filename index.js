let randomPhrase = Math.round(Math.random()*10)
const phrase = document.querySelector("#phrase")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector("#buttonCookie")
const btnNewCookie = document.querySelector('#btnNewCookie')

const zeroo = Number(0)
const one = Number(1)
const two = Number(2)
const three = Number(3)
const four = Number(4)
const five = Number(5)
const six = Number(6)
const seven = Number(7)
const eight = Number(8)
const nine = Number(9)
const ten = Number(10)



btnCookie.addEventListener('click',logicSoftware)

btnNewCookie.addEventListener('click',newPhrase)

document.addEventListener('keydown',pressEnter)


function newPhrase(event){
    randomPhrase = Math.round(Math.random()*10)
    logicSoftware(event)
}


function pressEnter(event){
    if(event.key == 'Enter' && screen2.classList.contains('hide') || screen1.classList.contains('hide')){
        newPhrase(event)
    }
}





function hideScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function logicSoftware(event){
    event.preventDefault()

    hideScreen()
    
    if(randomPhrase == zeroo){
        zero()
    } 

    else if(randomPhrase == one){
        phraseOne()
    }

    if(randomPhrase == two){
        phraseTwo()
    }

    else if(randomPhrase == three){
        phraseThree
    }

    if(randomPhrase == four){
        phraseFour()
    }

    else if(randomPhrase == five){
        phraseFive()
    }

    if(randomPhrase == six){
        phraseSix()
    }
    
    else if(randomPhrase == seven){
        phraseSeven()
    }

    if(randomPhrase == eight){
        phraseEight()
    }

    else if (randomPhrase == nine){
        phraseNine()
    }

    if(randomPhrase == ten){
        phraseTen()
    }


}


function zero(){
    phrase.innerHTML = `Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa.`
}

function phraseOne(){
    phrase.innerHTML = `Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia.`
}

function phraseTwo(){
    phrase.innerHTML = ` Se o plano não funcionar, mude o plano, não a meta.`
}

function phraseThree(){
    phrase.innerHTML = `Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.`
}

function phraseFour(){
    phrase.innerHTML = ` Que os seus sonhos te levem para onde o seu coração seja feliz.`
}

function phraseFive(){
    phrase.innerHTML = `Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa.`
}

function phraseSix(){
    phrase.innerHTML = `O que você procura está procurando você.`
}

function phraseSeven(){
    phrase.innerHTML = `Uma meta é um sonho com um prazo.`
}

function phraseEight(){
    phrase.innerHTML = `Tente mover o mundo - o primeiro passo será mover a si mesmo.`
}

function phraseNine(){
    phrase.innerHTML = `Disciplina é a ponte entre metas e realizações.`
}

function phraseTen(){
    phrase.innerHTML = `Você é mais forte do que as suas desculpas.`
}

