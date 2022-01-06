const jokeEl= document.getElementById('joke');
const jokeID= document.getElementById('jokeID');

jokeID.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {

const jokeREsult = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    
    const joke = await jokeREsult.json();
    
    
    console.log(joke);
    jokeEl.innerHTML = joke.joke;
    
    }

