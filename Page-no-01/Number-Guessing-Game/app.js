function guess_game(){
    let mynum = 7;
    let user_guess = +prompt("Guess the number between 1 to 10 :");
    if(user_guess == mynum){
       alert(`Bingo! Correct answer`)
    }else if (user_guess == 5 ||user_guess == 6){
        alert(`Close enough to the correct answer`)
    }else{
        alert(`Your guess is Wrong`);
    }

}