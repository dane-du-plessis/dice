setNumberOfDice(1);
setDiceSize(111);

function getNumberOfDice() {
    return localStorage.getItem('numberOfDice');
}

function setNumberOfDice(N) {
    if (N > 6) {
        N = 6;
    }
    localStorage.setItem('numberOfDice', N);
}


function setDiceSize(a) {
    window.diceSize = a;
}

function rollDice() {
    console.log('Rolling');
    console.log(window.number_of_dice);

    var randomArray = new Uint32Array(getNumberOfDice());
    window.crypto.getRandomValues(randomArray);
    // console.log(randomArray);
    randoms = randomArray.map(a => a%6 + 1);
    console.log(randoms);
    window.dice = randoms;
    renderDice();

}

function addDi() {
    setNumberOfDice(Number.parseInt(getNumberOfDice())+1);
    console.log(getNumberOfDice());
}

function removeDi() {
    var N = Number.parseInt(getNumberOfDice());
    if(N > 1) {
        setNumberOfDice(N-1);
    }
    console.log(getNumberOfDice());
}


function renderDice() {
    // show everything in the array of numbers.
    var element = document.querySelector("#DICE_HERE");
    element.innerHTML = randoms.join("  ");
    drawDice(window.dice);
}

function drawDice(dice) {
    const canvas = document.getElementById('canvas');
    canvas.setAttribute('width', (window.diceSize+10)*dice.length);
    const ctx = canvas.getContext('2d');

    dice.forEach((n, index) => {
        drawOne(ctx, n, index);
    })
}

function drawOne(ctx, n, index) {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const a = window.diceSize; // edge length of dice
    const gap = 4;
    let dx = a * (n-1) + gap * (n-1);
    if (n == 5|| n == 6) {
        dx += 2;
    }

    ctx.drawImage(document.getElementById('source'),
        11 + dx, 6+a+gap, 
        a, a, 
        (a+10)*index + 10, 0, 
        a, a); 
}

// https://getbutterfly.com/generate-html-list-from-javascript-array/