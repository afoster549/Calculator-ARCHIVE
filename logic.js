const output = document.getElementById("output")

const percentBtn = document.getElementById("percent")
const clearEntryBtn = document.getElementById("clear_entry") // done
const clearBtn = document.getElementById("clear") // done
const backspaceBtn = document.getElementById("backspace") // done
const inverseBtn = document.getElementById("inverse")
const squareBtn = document.getElementById("square")
const squareRootBtn = document.getElementById("square_root")

const convertBtn = document.getElementById("convert") // done
const decimalBtn = document.getElementById("decimal") // done
const equalsBtn = document.getElementById("equals") // done

let lastVal = null
let equation = ""

function appendVal(sign, val) {
    if (equation === "") {
        if (val === "+" || val === "-") {
            equation = equation + val
        }
    }

    if (sign === lastVal) {
        if (val === "+" || val === "-") {
            equation = equation + val
        } else {
            equation = equation + val
        }
    } else {
        equation = equation + val
    }

    lastVal = sign

    if (!lastVal) [
        updateOutput()
    ]
}

function updateOutput() {
    if (!equation.endsWith(".")) {
        output.innerText = eval(equation)
    }
}

percentBtn.addEventListener("click", () => {
    if (!lastVal && !equation.endsWith(".")) {
        equation = String(eval(equation) / 100)

        updateOutput()
    }
})


backspaceBtn.addEventListener("click", () => {
    equation = equation.substring(0, equation.length - 1)
})

clearEntryBtn.addEventListener("click", () => {
    equation = equation.substring(0, equation.length - 1)
})

clearBtn.addEventListener("click", () => {
    equation = ""
    output.innerText = "0"
})

inverseBtn.addEventListener("click", () => {
    if (!lastVal && !equation.endsWith(".")) {
        equation = "1/" + eval(equation)
        equation = String(eval(equation))

        updateOutput()
    }
})

squareBtn.addEventListener("click", () => {
    if (!lastVal && !equation.endsWith(".")) {
        equation = String(eval(equation) * eval(equation))

        updateOutput()
    }
})

squareRootBtn.addEventListener("click", () =>  {
    if (!lastVal && !equation.endsWith(".")) {
        equation = String(Math.sqrt(eval(equation)))

        updateOutput()
    }
})

convertBtn.addEventListener("click", () => {
    if (equation.startsWith("-")) {
        equation = equation.substring(1, equation.length)
    } else {
        equation = "-" + equation
    }

    updateOutput()
})

decimalBtn.addEventListener("click", () => {
    if (!equation.endsWith(".")) {
        equation = equation + "."
        lastVal = false
    }
})

equalsBtn.addEventListener("click", () => {
    if (!equation.endsWith(".")) {
        equation = String(eval(equation))
        updateOutput()
    }
})