let userInputNumber = +prompt("Enter a number to check whether it is divisible by 3 or not!");
let userInputchecker = userInputNumber % 3;
if (userInputchecker === 0){
    alert(`${userInputNumber} can be divisible by 3`);
}else{
    alert(`${userInputNumber} cannot be divisible by 3`);
}