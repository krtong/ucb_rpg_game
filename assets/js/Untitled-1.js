
const randomButtonValue = () = {
    return Math.floor(Math.random())
}


let playeScore = 0;
let crystalScore = min(100,200);
let btn1 = minMax(1,12);
let btn2 = minMax(1,12);
let btn3 = minMax(1,12);
let btn4 = minMax(1,12);
let wins= 0;
let losses = 0;

let crystalGame = `
<div>
    <div>Crystal Recharge Station!</div>
    <div>Crystal Score: ${crystalScore} </div>
    <div>Player SCore: ${playerScore}</div>
    <div>Wins: ${wins} </div>
    <div>Losses: ${losses} </div>
    <button class=""></button>
    <img src="../img/recharge.jpg">
</div>`


// document.getElementById("someplaceonthehtml").innerHTML = crystalGame;
$("#someplaceonthehtml").append(crystalGame);


$(".bu")


/*

The crystal game has a counter 0




*/