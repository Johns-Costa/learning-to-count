const pattern = [1, 2, 3, 5, 8, 7, 4];

let selectedPattern = [];
let patternGrid = document.getElementById('patternGrid');
let message = document.getElementById('message');

function addDotToPattern(dotIndex) {
    selectedPattern.push(dotIndex);
    document.querySelector(`[data-index="${dotIndex}"]`).style.backgroundColor = 'green';
}

function clearPattern() {
    selectedPattern = [];
    let dots = document.querySelectorAll('.pattern-dot');
    dots.forEach(dot => dot.style.backgroundColor = '#ccc');
}

function checkPattern() {
    if (selectedPattern.join('') === pattern.join('')) {
        message.textContent = 'Pattern unlocked!';
    } else {
        message.textContent = 'Pattern incorrect. Try again.';
        setTimeout(clearPattern, 1000);
    }
}

patternGrid.addEventListener('click', event => {
    let dotIndex = parseInt(event.target.getAttribute('data-index'));
    if (!isNaN(dotIndex)) {
        addDotToPattern(dotIndex);
        setTimeout(checkPattern, 500);
    };