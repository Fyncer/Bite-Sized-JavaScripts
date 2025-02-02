let count = 0;
let display = document.getElementById("display");
display.textContent = count;

document.getElementById("-").onclick = function() {
    count--;
    display.textContent = count;
}
document.getElementById("r").onclick = function() {
    count = 0;
    display.textContent = count;
}
document.getElementById("+").onclick = function() {
    count++;
    display.textContent = count;
}