var inp1 = "";
var inp2 = "";
var ans = "";
var isInp1 = true;
var operation = "";

function digit(input) {
    document.getElementById("clear-button").innerHTML = "C"
    if (isInp1) {
        inp1 += input;
        display(inp1);
    } else {
        inp2 += input;
        display(inp2);
    }
}

function decimal() {
    if (isInp1) {
        if (!inp1.includes('.')) {
            inp1 += "."
        }
        display(inp1)
    } else {
        if (!inp2.includes('.')) {
            inp2 += "."
        }
        display(inp2)
    }
}

function cClear() {
    if (inp2 != "") {
        inp2 = ""
        display("")
    } else if (operation != "") {
        operation = ""
        setOperation("")
        isInp1 = true
        display(inp1)
        document.getElementById("clear-button").innerHTML = "AC"
    } else {
        document.getElementById("clear-button").innerHTML = "C"
        clearInp()
    }
}

function clearInp() {
    inp1 = "";
    inp2 = "";
    operation = "";
    isInp1 = true;
    setOperation("");
    display("");
}

function add() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "+"
        setOperation("+");
    }
}

function sub() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "–"
        setOperation("–");
    }
}

function div() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "÷"
        setOperation("÷");
    }
}

function mul() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "×"
        setOperation("×");
    }
}

function log() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "log"
        setOperation("log");
    }
}

function getBaseLog(x, y) {

    return Math.log(y) / Math.log(x);
}

function pow() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "pow";
        setOperation("pow");
    }
}

function radical() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "radical";
        setOperation("√");
    }
}

function rndx() {
    calculate()
    if (isInp1 && inp1 != "") {
        isInp1 = false;
        operation = "rndx";
        setOperation("rndₓ");
    }
}

let _inp1, _inp2 = 0;
function calculate() {
    if (inp1 != "" && inp2 != "") {
        switch (operation) {
            case "+":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = _inp1 + _inp2;
                showAns(ans)
                break;

            case "–":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = _inp1 - _inp2;
                showAns(ans)
                break;
            case "÷":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = _inp1 / _inp2;
                showAns(ans)
                break;
            case "×":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = _inp1 * _inp2;
                showAns(ans)
                break;
            case "log":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = getBaseLog(_inp1, _inp2);
                showAns(ans)
                break;
            case "pow":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = Math.pow(_inp1, _inp2);
                showAns(ans)
                break;
            case "radical":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = Math.pow(_inp1, 1 / _inp2);
                showAns(ans)
                break;
            case "rndx":
                _inp1 = Number(inp1);
                _inp2 = Number(inp2);
                ans = Math.round(inp1 * (Math.pow(10, inp2))) / Math.pow(10, inp2);
                showAns(ans)
                break;
        }
    }
}

function showAns(answer) {
    inp1 = (Math.round(ans * 1000000000) / 1000000000).toString();
    display(inp1);
    inp2 = "";
    isInp1 = true;
    setOperation("");
    operation = ""
}

function negate() {
    if (isInp1) {
        inp1 *= -1;
        display(inp1);
    } else {
        inp2 *= -1;
        display(inp2);
    }
}

function percent() {
    if (isInp1) {
        inp1 /= 100;
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 /= 100;
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function sin() {
    if (isInp1) {
        inp1 = Math.sin(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.sin(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function cos() {
    if (isInp1) {
        inp1 = Math.cos(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.cos(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function tan() {
    if (isInp1) {
        inp1 = Math.tan(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.tan(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function asin() {
    if (isInp1) {
        inp1 = Math.asin(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.sin(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function acos() {
    if (isInp1) {
        inp1 = Math.acos(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.cos(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function atan() {
    if (isInp1) {
        inp1 = Math.atan(inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.tan(inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function square() {
    if (isInp1) {
        inp1 = Math.pow(inp1, 2);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.pow(inp2, 2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function sqrt() {
    if (isInp1) {
        inp1 = Math.pow(inp1, 0.5);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.pow(inp2, 0.5);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function sqrt() {
    if (isInp1) {
        inp1 = Math.pow(inp1, 0.5);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.pow(inp2, 0.5);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function fac() {
    if (isInp1) {
        inp1 = factorial(inp1, 0.5);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = factorial(inp2, 0.5);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

function tenPow() {
    if (isInp1) {
        inp1 = Math.pow(10, inp1);
        inp1 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp1);
    } else {
        inp2 = Math.pow(10, inp2);
        inp2 = Math.round(inp2 * 1000000000) / 1000000000
        display(inp2);
    }
}

function rnd() {
    if (isInp1) {
        inp1 = Math.round(inp1);
        display(inp1);
    } else {
        inp2 = Math.round(inp2);
        display(inp2);
    }
}

function rand() {
    if (isInp1) {
        inp1 = Math.random();
        inp1 = Math.round(inp1 * 1000000000) / 1000000000;
        display(inp1);
    } else {
        inp2 = Math.random();
        inp2 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp2);
    }
}

function e() {
    if (isInp1) {
        inp1 = 2.71828;
        inp1 = Math.round(inp1 * 1000000000) / 1000000000;
        display(inp1);
    } else {
        inp2 = 2.71828;
        inp2 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp2);
    }
}

function PI() {
    if (isInp1) {
        inp1 = 3.14159;
        display(inp1);
    } else {
        inp2 = 3.14159;
        display(inp2);
    }
}

function Ans() {
    if (isInp1) {
        inp1 = history[0];
        inp1 = Math.round(inp1 * 1000000000) / 1000000000;
        display(inp1);
    } else {
        inp2 = history[0];
        inp2 = Math.round(inp1 * 1000000000) / 1000000000
        display(inp2);
    }
}

function display(input) {

    document.getElementById("input-number").innerHTML = input;
}

function setOperation(input) {

    document.getElementById("operation-symbol").innerHTML = input;
}
