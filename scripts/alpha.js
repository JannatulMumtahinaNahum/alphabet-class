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

function continueGame(){
    // step 1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet : ', alphabet);

    // set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

// set backgroundcolor 
    setBackgroundColorById(alphabet)


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}