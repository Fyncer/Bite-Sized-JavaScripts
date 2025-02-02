let item = Math.floor(Math.random() * 100)+1;

let finished = false;
let guess = "";
let attempts = 0;

do {
    guess = window.prompt("Guess the number between 1 to 100: ").trim();
    switch(true){
        case(isNaN(guess)):
            attempts++;
            window.alert("Not a number. Try again");
            break;
        case(guess === ""):
            window.alert("You didn't typed anything, dummy");
            break;
        case(guess < 0 || guess > 100):
            window.alert("Pick 1 to 100 only. Try again");
            break;
        default:
            if(guess > item) {
                attempts++;
                window.alert("Go lower, try again.");
            }
            else if(guess < item) {
                attempts++;
                window.alert("Go Higher, try again.")
            }
            else {
                attempts++;
                window.alert(`You've guessed ${item}   |   Attempts/s: ${attempts}`);
            }
    }
}while(!finished);