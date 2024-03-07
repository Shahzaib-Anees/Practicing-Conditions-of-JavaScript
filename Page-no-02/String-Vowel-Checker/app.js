function vowel_checker(){
    let user_string = prompt("Enter a Letter/Alphabet");
    if(user_string.length === 1){
        if(user_string === "a" || user_string === "A"|| user_string === "e"||user_string === "E" || user_string === "i"||user_string === "I"  || user_string === "o"||user_string === "O" || user_string==="u"||user_string === "U" ){
            alert(`Your input letter is a Vowel`);
            console.log("True");
        }else{
            alert(`Your input letter is not a Vowel`);
            console.log("False");
        }
    }else{
        alert(`Only one Character is allowed`)
    }
}