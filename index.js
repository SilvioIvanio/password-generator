const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

// GETTERS
let buttonEl = document.querySelector("#generate-btn");
let passwordContainerOne = document.querySelector("#password-one")
let passwordContainerTwo = document.querySelector("#password-two")

// PASSWORD GENERATOR METHOD
buttonEl.addEventListener("click", function(){
    passwordContainerOne.textContent = getRandomPassword();
    passwordContainerTwo.textContent = getRandomPassword();
})

function getRandomPassword(){
    let randomPassword = "";
    for (i = 1; i <= 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomChar = characters[randomIndex];
        randomPassword += randomChar;
    }
    return randomPassword
}