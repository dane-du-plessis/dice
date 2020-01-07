function callFunc () {
    console.log('Rolling');
    window.number_of_dice = 1;
    console.log(window.number_of_dice);
}

function addDi() {
    window.number_of_dice = window.number_of_dice + 1;
    console.log(window.number_of_dice);
}

function removeDi() {
    var n = window.number_of_dice;
    if(n > 1) {
        window.number_of_dice = n-1;
    }
    console.log(window.number_of_dice);
}