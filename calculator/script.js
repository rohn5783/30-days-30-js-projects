//  select all buttons
const display  = document.querySelector("#display")
const action = document.querySelectorAll(".action")
const clear = document.querySelector(".clear-all")
const erase = document.querySelector(".erase")
const modulus = document.querySelector("#modulus")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const subtract = document.querySelector("#subtract")
const add = document.querySelector("#add")
const equal = document.querySelector(".equal")      





let textArray = []



// display input function
action.forEach((button) => {
button.addEventListener("click", (text) => {

textArray.push(button.textContent);
display.value = button.textContent;

display.value = textArray.join("");
console.log(textArray);
})
})


//  input display clearing button fucntion
clear.addEventListener("click", () => {
    display.value = " ";
    textArray.length = 0;

})

//  eraed single digit button function
/

//  clearing single digit button
erase.addEventListener("click", () => {
textArray.pop();
display.value = textArray.join("");
console.log(textArray);
})

//  modulus button function
// modulus.addEventListener("click", ()=> {

// })
// calculation function

function calculate () {
    let result = 0;
    result = eval(display.value);
    display.value = result;
    console.log(result);
}





//  equal button 
equal.addEventListener("click", () => {
    // console.log("Hare Krishna");
calculate();
    
})
