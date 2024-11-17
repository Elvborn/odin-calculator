let firstNumber, secondNumber, operator;

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");

function operate(num1, num2, op){
    switch(op){
        case("+"):
            return num1 + num2;
        case("-"):
            return num1 - num2;
        case("*"):
            return num1 * num2;
        case("/"):
            return num1 / num2;
        default:
            return "ERROR";
    }
}

function eval(){
    const result = operate(firstNumber, secondNumber, operator);

    display.textContent = result;
    reset();
}

function updateDisplay(){
    const first = !firstNumber ? "" : firstNumber;
    const second = !secondNumber ? "" : secondNumber;
    const op = !operator ? "" : operator;

    display.textContent = `${first} ${op} ${second}`;
}

function reset(){
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btnClasses = Array.from(btn.classList); 
        
        if(btnClasses.includes("operator"))
            if(firstNumber) operator = btn.textContent;

        if(btnClasses.includes("number")){
            if(!operator)
                firstNumber = !firstNumber ? btn.textContent : firstNumber + btn.textContent;
            else
                secondNumber = !secondNumber ? btn.textContent : secondNumber + btn.textContent;    
        }

        if(btnClasses.includes("clear"))
            reset();

        if(btnClasses.includes("eval")){
            eval();
            return;
        }
        
        updateDisplay();
    });
});