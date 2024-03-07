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
console.log(c);
if(c === 13){
    alert("Given Condition 2 for Variable C is true")
}//True
if(++c < 14){
    alert("Given Condition 3 for Variable C is true")
}//false
if (c === 14){
    alert("Given Condition 4 for Variable C is true")
}

// 6
let materialCost=20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if(totalCost = laborCost + materialCost ){
    alert("Cost are equals")
}

// 7
if(true){
    alert("true");
}
if(false){
    alert("False");
}

// 8
if("car" < "cat"){
    alert("Car is smaller than cat")
}

