const quote = document.getElementById('quote')
const quoteNum = document.getElementById('quote-number')
const api = 'https://api.adviceslip.com/advice'
const dice = document.getElementById('button').addEventListener('click', getAdvice)
async function getAdvice(){
    let response = await fetch(api)
    let {slip} = await response.json()
    console.log(slip)
    displayAdvice(slip)
}
function displayAdvice(data){
    quote.textContent = data.advice
    quoteNum.textContent = `Quote #0${data.id}`
}
