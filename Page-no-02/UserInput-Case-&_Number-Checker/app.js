function input_checker(){
    let userInputValue = prompt("Enter an English Alphabet/Letter or a Number");
    let stringCase = userInputValue.charCodeAt(userInputValue);
    let numberCase = parseInt(userInputValue);
    if(stringCase == 65 || stringCase <=90){
        alert(`The ${userInputValue} is a UpperCase String`);
    }else if (stringCase == 97 || stringCase <=122){
        alert(`The ${userInputValue} is a LowerCase String`);
    }else if(typeof(numberCase) == "number"){
        alert(`The ${userInputValue} is a Number`);
    }else {
        alert(`UnKnown Error caught`);
    }
}



