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
       this.currentOperand = this.currentOperand.toString().slice(0, -1) 
    }


    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
       this.currentOperand = this.currentOperand.toString() + number.toString()
    }


    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
          this.operation = operation
          this.previousOperand = this.currentOperand
          this.currentOperand = ''
    }


    compute() {
       let computation 
       const prev = parseFloat(this.previousOperand)
       const current = parseFloat(this.currentOperand)
       if (isNanN(prev) || isNanN(current)) return
       switch (this.operation) {
           case '+':
               computation = prev + current 
               break 
               case '-':
               computation = prev - current
               break 
               case '*':
               computation = prev * current
               break
               case '÷':  
               computation = prev / current
               break
               default:
               return       
       }
       this.currentOperand = computation
       this.operation = undefined
       this.previousOperand = ''
    }


    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = parseFloat(stringNumber.split('.')[1])
        let integerDisplay
        if (isNanN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }


    updateDisplay() {
        this.currentOperand.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if(this.operation != null ) {
            this.previousOperand.innerText = 
            `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperand.innerText = ''
        }
        
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
    });
});


operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    });
});


equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
});


allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
});

deleteButton.addEventListener('click', button => {
    calculator.del()
    calculator.updateDisplay()
});