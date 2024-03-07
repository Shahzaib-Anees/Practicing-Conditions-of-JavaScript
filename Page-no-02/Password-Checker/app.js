function password_checker(){
    let password1 = "shahzaib1234";
    let password2 = "m.shahzaib";
    let user_input_passwod = prompt("Enter your Password :");
    if(user_input_passwod === password1){
        alert("Correct Password");
        console.log("Correct Password");
    }else if(user_input_passwod === password2){
        alert("Correct Password");
        console.log("Correct Password");
    }else{
        alert("Incrrect Password")
        console.log("Inorrect Password")
    }
}