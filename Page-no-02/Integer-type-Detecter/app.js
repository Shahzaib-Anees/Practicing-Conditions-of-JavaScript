function type_detector(){
    let user_input_integer = +prompt(`Enter only a integer`);
    if(typeof(user_input_integer == "number")){
         if(user_input_integer === 0){
            alert (`The Integer you enter is equal to "0"`)
         }else if(user_input_integer > 0){
            alert(`The integer you enter is positive`)
        }else if(user_input_integer <0){
             alert(`The integer you enter is negative`)
         }else{
            alert("Unknown Error!")
         }
    }else{
        alert("Please enter only number/integer");
    }
}