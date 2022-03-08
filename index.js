'use strict'
// GET ACCESS TO THE HTML ELEMENTS WHO'S CONTENT WILL BE CHANGING
const quote = document.getElementById('quote')
const quoteNum = document.getElementById('quote-number')
const api = 'https://api.adviceslip.com/advice'
const diceFace = document.querySelector('.button')
let slipID = 0
let wait = false
const dice = document.getElementById('button').addEventListener('click', (e)=>{
    e.preventDefault()
    if (wait) return
    diceFace.classList.add('loading')
    getAdvice()
})

// GET AN ADVICE FROM THE ADVICE API THEN CALL THE DISPLAY FUNC WITH THE ADVICE DATA AS THE PARAMETER
async function getAdvice(){
    let newSlipID = 0
    wait = true
    let response = await fetch(api)
    let {slip} = await response.json()
    newSlipID = slip.id
    if (slipID === newSlipID)
        getAdvice()
    else{
        
        displayAdvice(slip)   
    }
}

// DISPLAY THE NEW ADVICE AND ADVICE ID
function displayAdvice(data){
    quote.textContent = data.advice
    quoteNum.textContent = `Quote #0${data.id}`
    setTimeout(()=>{
        diceFace.classList.remove('loading')
        wait = false
        slipID = data.id
    }, 200)
}