const APICALL = 'https://api.adviceslip.com/advice';
const advice = document.querySelector('.advice');
const button = document.querySelector('.circle');
const adviceId = document.querySelector('.advice-id');

// appel de l'api

async function getAdvice() {
    const response = await fetch(APICALL);
    const data = await response.json();
    console.log(data);
    return data;
    
}

// affichage de l'advice au click du boutton

button.addEventListener('click', async () => {
    const data = await getAdvice();
    advice.innerHTML = `<p>"${data.slip.advice}"</p> `
    adviceId.innerHTML = `ADVICE #${data.slip.id}`;
})