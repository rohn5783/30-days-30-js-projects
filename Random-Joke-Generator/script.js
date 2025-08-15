const generateBtn = document.querySelector('.generate-btn');
const jokeText = document.querySelector('.joke-text');


const getJoke = async () => {
    try {
        jokeText.textContent = "Loading...";
        const responce = await fetch ('https://official-joke-api.appspot.com/random_joke');
        const data = await responce.json();

jokeText.textContent = `${data.punchline}`;
// jokeText.textContent = `${data.punchline}`;


        }
        catch (error) {
            console.log("Failed to get joke", error);
        }
}


generateBtn.addEventListener("click", getJoke);
getJoke();