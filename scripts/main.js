(function init() {
    setNumberOfDice(1);
})();

function getNumberOfDice() {
    return localStorage.getItem('numberOfDice');
}

function setNumberOfDice(N) {
    localStorage.setItem('numberOfDice', N);
}

function callFunc () {
    console.log('Rolling');
    console.log(window.number_of_dice);

    var randomArray = new Uint32Array(getNumberOfDice());
    window.crypto.getRandomValues(randomArray);
    // console.log(randomArray);
    randoms = randomArray.map(a => a%6 + 1);
    console.log(randoms);
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