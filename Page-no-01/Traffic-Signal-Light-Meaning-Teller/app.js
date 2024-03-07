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