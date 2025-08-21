let rangeSlider = document.querySelector("#rangeSlider");
let valueSlider = document.querySelector("#valueSlider");
let passbox = document.querySelector("#passbox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genBtn = document.querySelector("#genBtn");
let copyIcon = document.querySelector("#copyIcon");

// SHOWING THE RANGESLIDER VALUE
valueSlider.textContent = rangeSlider.value;

rangeSlider.addEventListener("input", () => {
    valueSlider.textContent = rangeSlider.value;

});

genBtn.addEventListener("click", () => {
    passbox.value = generatePass();
});

let lowerChars = "abcdefghijklmnopqrstuvw";
let upperChars = "ABCDEFGHIJGKLMNOPQRSTUVWXYZ";
let allNumber = "0123456789";
let allSymbol = "~!@#$%^&*";

// Function to generate password 
function generatePass() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumber : "";
    allChars += symbols.checked ? allSymbol : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword
    }

    for(let i = 1; i <= rangeSlider.value; i++){

        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    

    return genPassword;
}
copyIcon.addEventListener("click", () => {
    if(passbox.value != "" || passbox.value.length >= 1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "✔"
        copyIcon.title = "password copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        },3000)
    }
})