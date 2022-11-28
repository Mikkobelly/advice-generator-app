const generateButton = document.querySelector('.generate-button');
const adviceId = document.querySelector('.adviceId');
const content = document.querySelector('.content');

const getAdvice = async () => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        const { id, advice } = data.slip;
        adviceId.innerHTML = id;
        content.innerHTML = `"${advice}"`;
    } catch (e) {
        console.log(e);
    }
}

generateButton.addEventListener('click', getAdvice);
