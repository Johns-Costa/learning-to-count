const patternGrid = document.getElementById('patternGrid');
const patternGrid2 = document.getElementById('patternGrid2');

const message = document.getElementById('message');
const message2 = document.getElementById('message2');
let selectedPattern = [];
let selectedPattern2 = [];
const pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pattern2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const playScreen = document.querySelector('.play-screen');
const mainMenu = document.querySelector('.main-menu');
const playBtn = document.getElementById("play-btn");
const rulesBtn = document.getElementById("rules-btn");
let level2 = document.getElementById("level-2");
const playLevel2 = document.querySelector(".level2");
let level1 = document.getElementById("level-1");
const level = document.querySelector(".level");
let home = document.getElementById("home");
const homebtn = document.querySelector(".home");



playBtn.addEventListener("click", () => {
    mainMenu.style.display = 'none';
    playScreen.style.display = 'flex';
    playLevel2.style.display = 'none';
    level.style.display = 'block';
    homebtn.style.display = 'block';
    newGame();
    level1.classList.toggle('is-active');

});

level2.addEventListener("click", () => {
    mainMenu.style.display = 'none';
    playScreen.style.display = 'none';
    playLevel2.style.display = 'flex';
    newGame2();
    level2.classList.toggle('is-active');
    if (level1.classList.toggle('is-active')) {
        level1.classList.remove('is-active');
        level2.classList.toggle('is-active');
        newGame2(false);
    }

});

level1.addEventListener("click", () => {
    mainMenu.style.display = 'none';
    playLevel2.style.display = 'none';
    playScreen.style.display = 'flex';
    newGame();
    level1.classList.toggle('is-active');
    if (level2.classList.toggle('is-active')) {
        level2.classList.remove('is-active');
        level1.classList.toggle('is-active');
    }


});



home.addEventListener("click", () => {
    mainMenu.style.display = 'flex';
    playScreen.style.display = 'none';
    playLevel2.style.display = 'none';
    level.style.display = 'none';
    homebtn.style.display = 'none';
});

//Level 1

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
//Level 2

function generateRandomNumbers2(count) {
    let numbers2 = [];
    while (numbers2.length < count) {
        let randomNumber2 = Math.floor(Math.random() * 20) + 1;
        if (!numbers2.includes(randomNumber2)) {
            numbers2.push(randomNumber2);
        }
    }
    return numbers2;
}

function addDotToPattern2(dotIndex2) {
    selectedPattern2.push(dotIndex2);
    document.querySelector(`[divElement="${dotIndex2}"]`);
    console.log(selectedPattern2);
}

function clearPattern2() {
    selectedPattern2 = [];
    delete dots;
    let dots2 = document.querySelectorAll('.pattern-dot2');
    dots2.forEach(dot2 => dot2.style.backgroundColor = '#ccc');
    message2.innerText = '';
}


function checkPattern2() {
    if (selectedPattern2.join() === pattern2.join()) {
        message2.textContent = 'Pattern unlocked!';
    } else {
        message2.textContent = 'Pattern incorrect. Try again.';
    }
}

function newGame2() {
    clearPattern2();
    let randomNumbers2 = generateRandomNumbers2(20);
    console.log(randomNumbers2);
    let divElement2 = [];


    for (let i = 0; i < randomNumbers2.length; i++) {
        let divId2 = `divs${i + 1}`;
        divElement2 = document.getElementById(divId2);
        divElement2.textContent = randomNumbers2[i];
    }

}


//EventListners Level 1

patternGrid.addEventListener('click', event => {
    if (event.target.innerText != 'Check' && event.target.innerText != 'new game') {
        let dotIndex = parseInt(event.target.getAttribute('data-index'));
        if (!isNaN(dotIndex)) {
            console.log(event.target.innerText);
            let bodyPart = document.getElementById('body-part-' + event.target.innerText);
            console.log(bodyPart);
            const randomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            addDotToPattern(parseInt(event.target.innerText));
            var h = randomInt(0, 360);
            var s = randomInt(70, 100);
            var l = randomInt(40, 90);
            var bgColor = `hsl(${h},${s}%,${l}%)`;
            console.log(bgColor);
            event.target.style.backgroundColor = bgColor;
            bodyPart.style.backgroundColor = bgColor;
        }
    }
});

document.getElementById('generate-button').addEventListener('click', newGame);

document.getElementById('check').addEventListener('click', checkPattern);

//EventListners Level 2

patternGrid2.addEventListener('click', event => {
    if (event.target.innerText != 'Check' && event.target.innerText != 'new game') {
        let dotIndex2 = parseInt(event.target.getAttribute('data-index'));
        if (!isNaN(dotIndex2)) {
            console.log(event.target);
            addDotToPattern2(parseInt(event.target.innerText));
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
            console.log(bgColor2);
            event.target.style.backgroundColor = bgColor2;
        }
    }
});

document.getElementById('generate-button2').addEventListener('click', newGame2);

document.getElementById('check2').addEventListener('click', checkPattern2);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rules-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
