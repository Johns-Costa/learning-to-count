const patternGrid = document.getElementById('patternGrid');
const message = document.getElementById('message');
let selectedPattern = [];
const pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const playScreen = document.querySelector('.play-screen');
const mainMenu = document.querySelector('.main-menu');
const playBtn = document.getElementById("play-btn");
const rulesBtn = document.getElementById("rules-btn");


playBtn.addEventListener("click", () => {
    mainMenu.style.display = 'none';
    playScreen.style.display = 'block';
});

function generateRandomNumbers(count) {
    let numbers = [];
    while (numbers.length < count) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function addDotToPattern(dotIndex) {
    selectedPattern.push(dotIndex);
    document.querySelector(`[divElement="${dotIndex}"]`);
    console.log(selectedPattern);
}
function clearPattern() {
    selectedPattern = [];
    let dots = document.querySelectorAll('.pattern-dot');
    dots.forEach(dot => dot.style.backgroundColor = '#ccc');
    message.innerText = '';
}
function checkPattern() {
    if (selectedPattern.join() === pattern.join()) {
        message.textContent = 'Pattern unlocked!';

    } else {
        message.textContent = 'Pattern incorrect. Try again.';

    }
}

function newGame() {
    clearPattern();
    let randomNumbers = generateRandomNumbers(10);
    console.log(randomNumbers);
    let divElement = [];


    for (let i = 0; i < randomNumbers.length; i++) {
        let divId = `div${i + 1}`;
        divElement = document.getElementById(divId);
        divElement.textContent = randomNumbers[i];
    }

}




patternGrid.addEventListener('click', event => {
    if (event.target.innerText != 'Check' && event.target.innerText != 'new game') {
        let dotIndex = parseInt(event.target.getAttribute('data-index'));
        if (!isNaN(dotIndex)) {
            console.log(event.target);
            addDotToPattern(parseInt(event.target.innerText));
        }
    }
});


document.getElementById('generate-button').addEventListener('click', newGame);

document.getElementById('check').addEventListener('click', checkPattern);