let sum = () => {
    event.preventDefault();
    
    let Number1 = +document.querySelector("#num1").value;
    let Number2 = +document.querySelector("#num2").value;

    let result1 = Number1 + Number2;
    document.querySelector("#result").innerHTML = `The Result is : ${result1}`;
}

let subtract = () => {
    event.preventDefault();
    
    let Number1 = +document.querySelector("#num1").value;
    let Number2 = +document.querySelector("#num2").value;

    let result2 = Number1 - Number2;
    document.querySelector("#result").innerHTML = `The Result is : ${result2}`;
}

let Multiply = () => {
    event.preventDefault();
    
    let Number1 = +document.querySelector("#num1").value;
    let Number2 = +document.querySelector("#num2").value;

    let result3 = Number1 * Number2;
    document.querySelector("#result").innerHTML = `The Result is : ${result3}`;
}

let Divide = () => {
    event.preventDefault();
    
    let Number1 = +document.querySelector("#num1").value;
    let Number2 = +document.querySelector("#num2").value;

    let result4 = Number1 / Number2;
    document.querySelector("#result").innerHTML = `The Result is : ${result4}`;
}

let Modulus = () => {
    event.preventDefault();
    
    let Number1 = +document.querySelector("#num1").value;
    let Number2 = +document.querySelector("#num2").value;

    let result5 = Number1 % Number2;
    document.querySelector("#result").innerHTML = `The Result is : ${result5}`;
}