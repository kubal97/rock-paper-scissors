var playerPoints = 0;
var computerPoints = 0;
var moves = 0;

//Start the game and displays score//
function start() {
    playerPoints = 0;
    computerPoints = 0;
    moves = 0;
    name = "";

    var name = window.prompt("Please enter your name: ", "Name");
    if(name.length >10){
        window.alert("Too long name!");
        document.getElementById("prompt").remove();
        restart();
        return false;
    }
    document.getElementById("playerName").innerText = name;
    document.getElementById("prompt").remove();
    document.getElementById("main1").style.display = "flex";
    document.getElementById("main2").style.display = "flex";
    document.getElementById("main3").style.display = "flex";
    document.getElementById("playerPoints").innerText = playerPoints;
    document.getElementById("computerPoints").innerText = computerPoints;
    return false;
}


//Computer picks//
function getComputerPicks(){
    var possiblePicks = ['paper', 'rock', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//Player's picks//
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");

paper.addEventListener("click", function () { playerPick("paper") });
rock.addEventListener("click", function () { playerPick("rock") });
scissors.addEventListener("click", function () { playerPick("scissors") });


function game(playerPick, computerPick) {
    var computerPick = getComputerPicks();

    if (
        (computerPick == 'rock' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'rock')) {
        computerPoints++;
        moves++;
        document.getElementById("computerPoints").innerText = computerPoints;
        document.getElementById("main2").innerText = "Computer win";
    }

    else if(playerPick == computerPick) {
        playerPoints += 0;
        computerPoints += 0;
        document.getElementById("main2").innerText = "No one win";
    }
    else {
        playerPoints++;
        moves++;
        document.getElementById("playerPoints").innerText = playerPoints;
        var name = document.getElementById("playerName").innerText.valueOf();
        document.getElementById("main2").innerText = name + " win";
    }

    if (playerPoints == 3){
        document.getElementById("result").style.display = "flex";
        var name = document.getElementById("playerName").innerText.valueOf();
        document.getElementById("winner").innerText = name;
        document.getElementById("paper").style.pointerEvents = "none";
        document.getElementById("rock").style.pointerEvents = "none";
        document.getElementById("scissors").style.pointerEvents = "none";
    }

    else if (computerPoints == 3){
        document.getElementById("result").style.display = "flex";
        document.getElementById("winner").innerText = "Computer";
        document.getElementById("paper").style.pointerEvents = "none";
        document.getElementById("rock").style.pointerEvents = "none";
        document.getElementById("scissors").style.pointerEvents = "none";
    }

}

function playerPick(playerPick) {
    var computerPick = getComputerPicks();

    game(playerPick, computerPick);
}

function restart() {
    document.getElementById("result").style.display = "none";
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("paper").style.pointerEvents = "";
    document.getElementById("rock").style.pointerEvents = "";
    document.getElementById("scissors").style.pointerEvents = "";
    document.getElementById("main2").innerText = "";


    name = "";
    playerPoints = 0;
    computerPoints = 0;
    moves = 0;

    var name = window.prompt("Please enter your name: ", "Name");
    if(name.length >10){
        window.alert("Too long name!");
        return false;
    }
    document.getElementById("playerName").innerText = name;
    document.getElementById("main1").style.display = "flex";
    document.getElementById("main2").style.display = "flex";
    document.getElementById("main3").style.display = "flex";
    document.getElementById("playerPoints").innerText = playerPoints;
    document.getElementById("computerPoints").innerText = computerPoints;
    return false;
}