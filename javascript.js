let firstNumber, secondNumber, operator;

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");

function operate(num1, num2, op){
    num1 = Number(num1);
    num2 = Number(num2);

    let result;

    switch(op){
        case("+"):
            result = num1 + num2;
            break;
        case("-"):
            result = num1 - num2;
            break;
        case("*"):
            result = num1 * num2;
            break;
        case("/"):
            if(num1 === 0 || num2 === 0)
                return "Division Error!"

            result = num1 / num2;
            break;
        default:
            return "ERROR";
    }

    return Math.round(result * 100000) / 100000;
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
        
        if(btnClasses.includes("operator")){
            if(firstNumber && secondNumber){
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = undefined;
                operator = btn.textContent;
            }

            if(firstNumber) operator = btn.textContent;
        }
            

        if(btnClasses.includes("number")){
            if(!operator)
                firstNumber = !firstNumber ? btn.textContent : firstNumber + btn.textContent;
            else
                secondNumber = !secondNumber ? btn.textContent : secondNumber + btn.textContent;    
        }

        if(btnClasses.includes("clear"))
            reset();

        if(btnClasses.includes("eval")){
            if(firstNumber && secondNumber)
                eval();
            return;
        }
        
        updateDisplay();
    });
});