let user_input_number = +prompt("Enter a number to check whether it is Even or Odd;");
let out_put = user_input_number % 2;
if(out_put == 0){
    alert(`${user_input_number} is an Even Number`);
}else if(out_put > 0){
    alert(`${user_input_number} is an Odd Number`);
}else{
    alert("Unknown Error")
}