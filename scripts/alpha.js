// function play(){
// // Step1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

// // Show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList);
//     playGroundSection.classList.remove('hidden');
// }

function  handleKeyboardButtonPress (event){
    const playerPressed = event.key;
    console.log('The Button Player Press :' , playerPressed);

    // stop the game if pressed "ESC"
    if(playerPressed === 'Escape'){
        gameOver();
    }

// get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed , expectedAlphabet);
    
    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('You get a point!');
        console.log('you have pressed correctly' , expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score' , newScore);

// --------------------------------------
        // update score:
        // 1: get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2: increase the score by 1
        // const newScore = currentScore + 1;

        // // 3: show the updated score
        // currentScoreElement.innerText = newScore;

        
        // start a new score
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else{
        console.log('You misssed. You lost a life');

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life' , newLife);

        if(newLife === 0){
            gameOver();
        }

// -------------------------------------------------------
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step-2: reduce the life count 
        // const newLife = currentLife - 1;

        // // display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);



function continueGame(){
    // step 1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet : ', alphabet);

    // set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

// set backgroundcolor 
    setBackgroundColorById(alphabet);
}


function play(){
    // hide everything show playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life' , 5);
    setTextElementValueById('current-score' , 0)

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // step-1: get the final score
    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score' , finalScore);

    // clear the ;ast selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet)

}

