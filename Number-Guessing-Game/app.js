function guess_game(){
    let mynum = 7;
    let user_guess = +prompt("Guess the number between 1 to 10 :");
    if(user_guess == mynum){
       alert(`Congratulations! You have guessed the correct number`)
    }else if (user_guess == 5 ||user_guess == 6){
        alert(`Oops! You are very closed`)
    }else{
        alert(`Your guess is Wrong`);
    }

}