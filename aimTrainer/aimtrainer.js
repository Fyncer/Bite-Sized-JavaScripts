//My shitty small project

// hits, clicks, accuracy, and labels
let hitLabel = document.getElementById("score");
let accuracyLabel = document.getElementById("accuracy");
let totalClick = 0;
let hit = 0;
let accuracy = 0;

//The 'range' and 'target'
let range = document.getElementById("range");
let target = document.getElementById("target");

//Time and its label
let secs = 60;
let mins = 1;
let minsLabel = document.getElementById("mins");
let secsLabel = document.getElementById("secs");

// Random position at start
reposition(target);

// Timer (1 minute / 60 secs)
var minuteTimer = setInterval(function(e) {
    if(secs < 0) {
        clearInterval(minuteTimer);
        alert("Timeout!");
    }
    else {
        switch (true){
            case secs < 60:
                mins *= 0;
            case secs < 10:
                secsLabel.value = `${String(secs).padStart(2, "0")}`;
        }
    }
    minsLabel.value = `${String(mins).padStart(2, "0")}`;
    secs--;
}, 1000)

// Checks if a click event has been triggered
range.onclick = function() {
    totalClick++;
    if(isClicked == true) {
        hit++;
        hitLabel.textContent = hit;
        reposition(target);
    }
    accuracyLabel.textContent = `${solveAccuracy(hit, totalClick, accuracy)}%`;
    isClicked = false;
}

// Returns if the click hits the target
target.addEventListener("click", function(e) {
    return isClicked = true;
});

// Change target position randomly
function reposition(target) {
    let randomX = Math.floor(Math.random() * (window.innerWidth - 200));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 200));
    target.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
}

// Gives accuracy rate
function solveAccuracy(hit, totalClick, accuracy) {
    accuracy = (hit/totalClick) * 100;
    accuracy = accuracy.toFixed(2);
    return accuracy;
}
