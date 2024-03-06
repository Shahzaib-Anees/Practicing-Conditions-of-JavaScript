function compare_integer(){
    let userValue1 = +prompt("Enter integer one");
      console.log(userValue1);
      let userValue2 = +prompt("Enter integer two");
      console.log(userValue2);
    if(typeof(userValue1) == "number" && typeof(userValue2) == "number"){
        if(userValue1 > userValue2){
            alert(`${userValue1} is greater than ${userValue2}`);
        }else{
            alert(`${userValue2} is greater than ${userValue1}`);
        }
    }else{
        console.log("Error! Please enter only numbers/integers")
        alert("Error! Please enter only numbers/integers")
    }
}