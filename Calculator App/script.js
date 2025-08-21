let inputValue = document.querySelector(".display");
    
let btnVlaue = document.querySelectorAll(".btn");

let currentValue = "";
let arr = Array.from(btnVlaue);

arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "="){
            currentValue = eval(currentValue);
            inputValue.value = currentValue;
        }
        else if(e.target.innerHTML == "AC"){
            currentValue = "";
            inputValue.value = currentValue;
        }
        else if(e.target.innerHTML == "DEL"){
            currentValue = currentValue.substring(0, currentValue.length-1);
            inputValue.value = currentValue;
        }
        else{
            currentValue += e.target.innerHTML;
            inputValue.value = currentValue;
        }

        

    })
})
