let email = String(window.prompt("Enter your STI Student Email"));

let surname = email.slice(email.charAt(0), email.indexOf("."));
let studentNum = email.slice(email.indexOf(".")+1, email.indexOf("@"));
let branch = email.replace(".sti.edu.ph", "").slice(email.indexOf("@")+1, email.length-1);

window.alert(`--- Student Info ---\nSurname: ${surname}\nStudent Number: ${studentNum}\nBranch: ${branch}`);
