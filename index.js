const quote = document.getElementById('quote')
const dice = document.getElementById('button').addEventListener('click', e =>{
    const api = 'https://api.adviceslip.com/advice'
    async function getQuote(){
        let adviceSlip = ''
        let response = await fetch(api)
        let {slip} = await response.json()
        console.log(slip.advice)
        quote.innerText = slip.advice
    }
    getQuote()
})
