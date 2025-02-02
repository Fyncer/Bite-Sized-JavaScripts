let dice1 = 0, dice2 = 0, dice3 = 0, number;

document.getElementById("roll").onclick = function() {
    dice1 = displayRoll(1, dice1);
    dice2 = displayRoll(2, dice2);
    dice3 = displayRoll(3, dice3);

    if (dice1 === dice2 && dice2 === dice3) {
        window.alert("3 In A Row!")
    }
}

function randomize(die) {
    return die = Math.floor((Math.random() * 6) + 1);
}

function displayRoll(dieType, diceNum) {
    number = randomize(diceNum);

    document.getElementById(`up${dieType}`).textContent = number;
    document.getElementById(`mid${dieType}`).textContent = number;
    document.getElementById(`down${dieType}`).textContent = number;

    return number;
}