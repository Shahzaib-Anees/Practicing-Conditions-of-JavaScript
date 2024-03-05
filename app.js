// 1
let user_city = prompt("Enter your City Name:");
if(user_city == "Karachi" || user_city == "karachi"){
    alert("Welcome to City of Lights");
    console.log("Welcome to City of Lights");
}else if(user_city == "Lahore" || user_city == "lahore"){
    alert("Welcome to Lahore ! \n Lahore !  Lahore hai!");
    console.log("Welcome to Lahore ! \n Lahore !  Lahore hai!");
}else if(user_city == "Islamabad" || user_city == "islamabad"){
    alert("Welcome to Islamabad !");
    console.log("Welcome to Islamabad !");
}else{
    alert("You're not from Pakistan");
    console.log("You're not from Pakistan");
}

// 2
let user_gender = prompt("Tell me your correct Gender:");
if(user_gender == "Male" || user_gender == "male"){
    alert("Good Morning! Sir")
}else if(user_gender == "Female" || user_gender == "female"){
    alert("Good Morning! Maam")
}else{
    alert("Please tell me your correct Gender")
}

// 3
let user_signal_color = prompt("Tell me the Traffic signal color so,I can help you");
if(user_signal_color == "Red" || user_signal_color == "red"){
    alert ("Must Stop")
    console.log ("Must Stop")
}else if (user_signal_color == "Yellow" || user_signal_color == "yellow"){
    alert ("Ready to Move")
    console.log ("Ready to Move")
}else if (user_signal_color == "Green" || user_signal_color == "Green"){
    alert("Move Now")
    console.log("Move Now")
}else{
    alert("Enter correct Signal Color")
}

// 4
let car_fuel= +prompt("What is your remaining Car Fuel?");
if (car_fuel < 0.25){
    alert("Please refill the Fuel in your Car")
    console.log("Please refill the Fuel in your Car")
}else{
    alert("You can drive")
    console.log("You can drive")
}


// 5
let a=4;
if(++a === 5){
    alert("Given Condition for Variable A is true")
}//true

let b = 82;
if(b++ === 83){
    alert("Given Condition for Variable B is true")
}//false

let c= 12;
if(c++ === 13){
    alert("Given Condition 1 for Variable C is true")
}//false
if(c === 13){
    alert("Given Condition 2 for Variable C is true")
}//false
if(++c < 14){
    alert("Given Condition 3 for Variable C is true")
}//false
if (c === 14){
    alert("Given Condition 4 for Variable C is true")
}

let materialCost=20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if(totalCost = laborCost + materialCost ){
    alert("Cost are equals")
}

if(true){
    alert("true");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("Car is smaller than cat")
}

