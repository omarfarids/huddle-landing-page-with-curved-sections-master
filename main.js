let emailLetters = /[a-zA-Z0-9]@/;
let emailForm = document.querySelector("input[type='email']");
let btn = document.getElementById("btn");

let msg = document.createElement("p");
msg.innerHTML = "Please check your Email";
msg.style.color = "tomato";

btn.addEventListener("click", function () {
    if (!emailLetters.test(emailForm.value)) {
        emailForm.style.cssText = "border:1px solid tomato";
        emailForm.parentNode.nextElementSibling.appendChild(msg);
    } else {
        msg.innerHTML = "";
        emailForm.style.cssText = "border:1px solid black"
    }
})