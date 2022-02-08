class Calculator {
    constructor(previousOperand, currentOperand) {
       this.previousOperand = previousOperand
       this.currentOperand = currentOperand
       this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    del() {

    }


    appendNumber(number) {
       this.currentOperand = number
    }


    chooseOperation(operation) {

    }


    compute() {

    }


    updateDisplay() {
        this.currentOperand.innerText = this.currentOperand
    }
}


const numberButtons = document.querrySelectorAll('[data-number]')
const operationsButtons = document.querrySelectorAll('[data-operation]')
const equalsButton = document.querrySelectorAll('[data-equals]')
const deleteButton = document.querrySelectorAll('[data-del]')
const allClearButton = document.querrySelectorAll('[data-clear]')
const previousOperand = document.querrySelectorAll('[data-previous]')
const currentOperand = document.querrySelectorAll('[data-current]')


const calculator = new Calculator(previousOperand, currentOperand)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});