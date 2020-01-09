setNumberOfDice(1);
setDiceSize(111);
updateDiceCounter();
reveal(false);

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
    hideDice(true);
    console.log('Rolling');
    console.log(window.number_of_dice);

    var randomArray = new Uint32Array(getNumberOfDice());
    window.crypto.getRandomValues(randomArray);
    // console.log(randomArray);
    randoms = randomArray.map(a => a%6 + 1);
    console.log(randoms);
    window.dice = randoms;
}

function reveal() {
    hideDice(false);
}

function addDi() {
    setNumberOfDice(Number.parseInt(getNumberOfDice())+1);
    updateDiceCounter(window.dice);
    console.log(getNumberOfDice());
}

function removeDi() {
    var N = Number.parseInt(getNumberOfDice());
    if(N > 1) {
        setNumberOfDice(N-1);
    }
    updateDiceCounter(window.dice);
    console.log(getNumberOfDice());
}

function renderDice() {
    // show everything in the array of numbers.
    drawDice(window.dice);
}


function updateDiceCounter() {
    var element = document.querySelector("#N_DICE");
    element.innerHTML = "Number of dice: " + localStorage.getItem('numberOfDice');
}

function drawDice(dice) {
    const canvas = document.getElementById('canvas');
    canvas.setAttribute('width', (window.diceSize+10)*dice.length+ 10);
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
        (a+10)*index + 10, 10, 
        a, a); 
}

// https://getbutterfly.com/generate-html-list-from-javascript-array/ -- it's awkward.

function hideDice(hideThem) {
    if (hideThem) {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height); 
        return;
    }
    drawDice(window.dice);
}


// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button -- on mouse down and up/leave do stuff.