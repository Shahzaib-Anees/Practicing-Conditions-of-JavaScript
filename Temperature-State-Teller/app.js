let userInputTemperature= +prompt("Please enter the current Temperture in Numbers :");

if(userInputTemperature<=10 || userInputTemperature >= 10 && userInputTemperature <20){
    alert(`“OMG! Today’s weather is so Cool.”`);
}else if (userInputTemperature >= 20 && userInputTemperature < 30){
    alert(`“Today’s Weather is cool.”`);
}else if(userInputTemperature >=30 && userInputTemperature < 40){
    alert(`“The Weather today is Normal.”`)
}else if (userInputTemperature >=40){
    alert(`“It is too hot outside.”`);
}else{
    alert(`Please enter correct Input`);
}
