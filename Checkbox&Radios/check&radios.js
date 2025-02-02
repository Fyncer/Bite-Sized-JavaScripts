let click = document.getElementById("click");
let result = document.getElementById("result");

let toilet = document.getElementById("toilet");
let edge = document.getElementById("edge");
let ohio = document.getElementById("ohio");
let rizz = document.getElementById("rizz");
let sigma = document.getElementById("sigma");

let extra = document.getElementById("check");

let addWords = "Fanum Bop Bomboclat Mewwing"

toilet.onclick = function() {
    edge.checked = false;
    ohio.checked = false;
    rizz.checked = false;
    sigma.checked = false;
}

edge.onclick = function() {
    toilet.checked = false;
    ohio.checked = false;
    rizz.checked = false;
    sigma.checked = false;
}

ohio.onclick = function() {
    toilet.checked = false;
    edge.checked = false;
    rizz.checked = false;
    sigma.checked = false;
}

rizz.onclick = function() {
    toilet.checked = false;
    edge.checked = false;
    ohio.checked = false;
    sigma.checked = false;
}

sigma.onclick = function() {
    toilet.checked = false;
    edge.checked = false;
    ohio.checked = false;
    rizz.checked = false;
}

click.onclick = function() {
    if (extra.checked) {
        switch(true) {
            case toilet.checked:
                result.innerHTML = `Skibidi ${addWords} Toilet`
                break;
            case edge.checked:
                result.innerHTML = `Skibidi ${addWords} Edge`
                break;
            case ohio.checked:
                result.innerHTML = `Skibidi ${addWords} Ohio`
                break;
            case rizz.checked:
                result.innerHTML = `Skibidi ${addWords} Rizz`
                break;
            case sigma.checked:
                result.innerHTML = `Skibidi ${addWords} Sigma`
                break;
        }
    }
    else {
        switch(true) {
            case toilet.checked:
                result.innerHTML = "Skibidi Toilet"
                break;
            case edge.checked:
                result.innerHTML = "Skibidi Edge"
                break;
            case ohio.checked:
                result.innerHTML = "Skibidi Ohio"
                break;
            case rizz.checked:
                result.innerHTML = "Skibidi Rizz"
                break;
            case sigma.checked:
                result.innerHTML = "Skibidi Sigma"
                break;
        }
    }
}

