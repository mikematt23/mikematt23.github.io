// summary: making a game where you have to 
//get a certain amount of clicks to before time runs out

alert("you must get the all the clicks before time runs out Click 'OK' to start")
// making a ball appear on click
function addBall(){
  var ball = document.createElement("section")
  document.getElementById("demo").appendChild(ball) 
  decreaseCount(ball)
 }
// counting clicks to bring down the total
var count = 20;
var clicker = count 
function decreaseCount(ball) {
  count--
  document.getElementById("clicksLeft").innerHTML=count + "clicks left"
}
//creating a second timer & the rule of the game
var timeLeft = 15;
var timeDecrease = setInterval(timer, 1000);
function timer() {
  timeLeft--;
  if (timeLeft <= -2) {
    clearInterval(timeDecrease)
    return;
  }
  document.getElementById("timer").innerHTML=timeLeft + " secs";
  
  if (count <= 0 && timeLeft > -1) {
    alert("NIce, You won")
    clearInterval(timeDecrease)
    location.reload()
  } else if (count > 0 && timeLeft === -1) {
    alert("HAHAHAHA You Lose!!!")
    location.reload()
  }
}