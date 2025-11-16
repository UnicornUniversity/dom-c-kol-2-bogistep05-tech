// main.js

function permittedInputSystems() { return [2, 10, 16]; }
function permittedOutputSystems() { return [2, 10, 16]; }

function toDecimal(numberString, baseFrom) {
    const digits = "0123456789ABCDEF";
    let result = 0, power = 0;
    for (let i = numberString.length - 1; i >= 0; i--) {
        const digitValue = digits.indexOf(numberString[i].toUpperCase());
        if (digitValue === -1 || digitValue >= baseFrom) {
            throw new Error("Neplatný vstup: " + numberString);
        }
        result += digitValue * Math.pow(baseFrom, power);
        power++;
    }
    return result;
}

function fromDecimal(number, baseTo) {
    const digits = "0123456789ABCDEF";
    if (number === 0) return "0";
    let result = "";
    while (number > 0) {
        result = digits[number % baseTo] + result;
        number = Math.floor(number / baseTo);
    }
    return result;
}

function main(input, inputSystem, outputSystem) {
    const decimal = toDecimal(input, inputSystem);
    return fromDecimal(decimal, outputSystem);
}

export { main, permittedInputSystems, permittedOutputSystems };
