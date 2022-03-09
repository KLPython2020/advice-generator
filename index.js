'use strict'
// GET ACCESS TO THE HTML ELEMENTS WHO'S CONTENT WILL BE CHANGING
const quote = document.getElementById('quote')
const quoteNum = document.getElementById('quote-number')
const api = 'https://api.adviceslip.com/advice'
const diceFace = document.querySelector('.button')
let slipID = 0
let wait = false
const dice = document.getElementById('button').addEventListener('click', (e)=>{
    if (wait) return
    diceFace.classList.add('loading')
    getAdvice()
})
// GET AN ADVICE FROM THE ADVICE API
async function getAdvice(){
    wait = true
    let response = await fetch(api)
    let {slip} = await response.json()
    slipID === slip.id ? getAdvice() : displayAdvice(slip)
}
// DISPLAY THE NEW ADVICE AND ADVICE ID
function displayAdvice(data){
    quote.textContent = data.advice
    quoteNum.textContent = `Advice #0${data.id}`
    setTimeout(()=>{
        diceFace.classList.remove('loading')
        wait = false
        slipID = data.id
    }, 100)
}
getAdvice()