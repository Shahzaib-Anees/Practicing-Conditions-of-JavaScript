
function calculation() {
    let value1 = +prompt("Please enter First Number :");
    let value2 = +prompt("Please enter Second Number :");
    let operator = prompt("Please enter an Operator :\n 'Addition','Substraction','Multiply','Division','Modulus'");

    if (operator === "Addition" || operator === "addition" || operator === "+") {
        alert(`The Addition of ${value1} and ${value2} is equal to ${value1 + value2}`)
    } else if (operator === "Substraction" || operator === "substraction" || operator === "-") {
        alert(`The Substraction of ${value1} and ${value2} is equal to ${value1 - value2}`)
    } else if (operator === "Multiply" || operator === "multiply" || operator === "*") {
        alert(`The Multiplication of ${value1} and ${value2} is equal to ${value1 * value2}`)
    } else if (operator === "Division" || operator === "division" || operator === "/") {
        alert(`The Division of ${value1} and ${value2} is equal to ${value1 / value2}`)
    } else if (operator === "Modulus" || operator === "modulus" || operator === "%") {
        alert(`The Modulus of ${value1} and ${value2} is equal to ${value1 % value2}`)
    } else {
        alert("Oops! An Error occured");
    }
}