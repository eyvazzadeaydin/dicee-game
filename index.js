var button = document.getElementById("roll-button");

function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6)+1;
    var randomNumber2 = Math.floor(Math.random() * 6)+1;
    
    document.querySelector(".img1").setAttribute("src", "/images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "/images/dice" + randomNumber2 + ".png");
    
    var title = document.querySelector("h1");
    
    if(randomNumber1 > randomNumber2){
        title.innerText = "🚩Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2){
        title.innerText = "Player 2 Wins!🚩";
    }else{
        title.innerText = "Draw!";
    }
}

button.addEventListener("click", rollDice);