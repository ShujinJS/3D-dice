var elDiceOne = document.getElementById("cube");
//var elPointRoll = document.getElementById('pointRollButton');
//var elDiceRoll = document.getElementById("comeOutRollButton");


elDiceOne.onclick = function() {comeOutRoll();};
//elPointRoll.onclick = function() {pointRoll();};
//elDiceRoll.onclick = function() {comeOutRoll();};




function comeOutRoll() {

    var diceOne = Math.floor((Math.random() * 6) + 1);

    elDiceOne.classList.toggle("animate");

    //animateDice();

    for( var i = 1; i<= 6; i++) {
        elDiceOne.classList.remove("show-" + i);
        if (diceOne === i) {
            elDiceOne.classList.add("show-" + i);
        }
    }

}

function pointRoll() {

    var diceOne = Math.floor((Math.random() * 6) + 1);

    elDiceOne.classList.remove("animate");

    for( var i = 1; i<= 6; i++) {
        elDiceOne.classList.remove("show-" + i);
        if (diceOne === i) {
            elDiceOne.classList.add("show-" + i);
        }
    }
}
