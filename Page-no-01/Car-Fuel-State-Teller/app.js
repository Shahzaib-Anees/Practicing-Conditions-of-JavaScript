// 4
function fuel_checker() {
    let car_fuel = +prompt("What is your remaining Car Fuel?");
    if (car_fuel < 0.25) {
        alert("Please refill the Fuel in your Car")
        console.log("Please refill the Fuel in your Car")
    } else {
        alert("You can drive")
        console.log("You can drive")
    }
}