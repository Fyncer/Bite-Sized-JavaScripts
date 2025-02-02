let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let setUsername = "Ren";
let setPassword = "Ren1234";

/*let setUsername = "";
let setPassword = "";



do {
    setUsername = window.prompt("Enter New Username: ");
    if (setUsername === null || setUsername === "") {
        window.alert("This field cannot be blank. Please try again.");
    }
} while(setUsername === null || setUsername === "");

do { 
    setPassword = window.prompt("Enter New Password: ");
    if (setPassword === null || setPassword === "") {
        window.alert("This field cannot be blank. Please try again.");
    }
} while(setPassword === null || setPassword === "");

console.log(setUsername);
console.log(setPassword);*/

document.getElementById("loginbtn").onclick = function() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if(username === setUsername && password === setPassword) {
        window.alert("Login Successful!");
    }
    else if((username === "" || password === "") || (username === undefined || password === undefined)) {
        switch(true) {
            case username === "":
                document.querySelector('input[type=text]').style.setProperty("--c", "red");
                document.getElementById("username").placeholder = "Empty fields are not accepted.";
            case password === "":
                document.querySelector('input[type=password]').style.setProperty("--c", "red");
                document.getElementById("password").placeholder = "Empty fields are not accepted.";
                break;
        }
    }
    else {
        window.alert("Incorrect Username / Password. Try again.")
    }
    console.log(username);
    console.log(password);
};