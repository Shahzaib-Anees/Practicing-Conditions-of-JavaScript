let user_input_time = +prompt("Enter your Local Time in 24 hours Format :");
if (user_input_time >= 0 && user_input_time <= 2400) {
    if (user_input_time === 0 || user_input_time < 1200) {
        alert(`Good Morning!`)
    } else if (user_input_time >= 1200 || user_input_time < 1700 ) {
        alert(`Good Afternoon!`)
    } else if (user_input_time >= 1700  || user_input_time < 2100 )  {
        alert(`Good Evening!`)
    } else if (user_input_time >= 2100 || user_input_time <= 2359) {
        alert(`Good Night!`)
    } else {
        alert(`Error!`)
    }
}else {
    alert(`Error! Enter Correct Time`)
}