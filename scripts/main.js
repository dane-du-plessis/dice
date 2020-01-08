setNumberOfDice(1);

function getNumberOfDice() {
    return localStorage.getItem('numberOfDice');
}

function setNumberOfDice(N) {
    localStorage.setItem('numberOfDice', N);
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
    drawDice(window.dice[0]);
}

function drawDice(n) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    const w = 111;
    const gap = 4;
    let dx = w * (n-1) + gap * (n-1);
    if(n == 5|| n == 6) {
        dx += 2;
    }

    ctx.drawImage(document.getElementById('source'),
                11 + dx, 6+w+gap, 
                w, w, 
                0, 0, 
                w, w);
}

// https://getbutterfly.com/generate-html-list-from-javascript-array/