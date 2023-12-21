// Start Game Function 
function gameStartbtn() {
   document.getElementById("icon").style.display = "none";
   if (document.getElementById("icon").style.display = "none") {
      document.getElementById("dyanmic_ball").style.display = "block";
      dyanmicBallGenerator();
      gameWin();
   }
}
function dyanmicBallGenerator() {
   var ball_container = document.getElementById("ball_container");
   for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 15; j++) {
         var ball = document.createElement("div");
         ball.style.width = "53.3px";
         ball.style.height = "50px";
         ball.style.float = "left";
         ball.style.borderRadius = "50%";
         ball.id = (i) + "_" + (j);
         ball_container.appendChild(ball);
         ball.addEventListener("click", buttonPressed);
         if (i <= 6) {
            for (var k = j; k < j + 1; k++) {
               if (ball.id < "7_1")
                  ball.className = getColor();
            }
         }
         else if (7 <= 10) {
            ball.style.opacity = "1";
         }
      }
   }

   var clearboth = document.createElement("div");
   document.getElementById('ball_create').style.display = 'block';
   ball_container.appendChild(clearboth);
}

function getColor() {
   var no1 = Math.floor(Math.random() * 4) + 1;
   var arr = ['', 'springgreen', 'blue', 'yellow', 'red'];
   return arr[no1];
}

function getBallColorChange() {
   var ballID = document.getElementById("ball1");
   ballID.className = getColor();
}


function buttonPressed() {
   var clickId = this.id;
   if (document.getElementById(clickId).className == "") {
      var ballID = document.getElementById("ball1");
      var CurrentId = placeBall(clickId, ballID);
      if (CurrentId.split("_")[0] == "10")
         gameOver();
      checkCondition(CurrentId);
      getBallColorChange();
   }
}

function checkCondition(currentClickId) {
   getTopRow(currentClickId);
   getTopRowRight(currentClickId);
   getTopRowLeft(currentClickId);
}

function getTopRow(currentClickId) {
   var row = parseInt(currentClickId.split("_")[0]);
   var col = parseInt(currentClickId.split("_")[1]);
   var topRowId = row - 1 + "_" + col;
   var CurrentId = document.getElementById(currentClickId);
   var topRow = document.getElementById(topRowId);
   if (CurrentId.className == topRow.className) {
      removeTopRow(currentClickId, topRowId)
   }
}

function removeTopRow(CurrentId, topRowId) {
   var row = parseInt(CurrentId.split("_")[0]);
   var col = parseInt(CurrentId.split("_")[1]);
   for (var i = row; i > 0; i--) {

      if (CurrentId.split("_")[0] == "1") {
         document.getElementById(CurrentId).classList.remove(document.getElementById(CurrentId).className);
         ScorePlayer();
         break;
      }
      else if (document.getElementById(CurrentId).className == document.getElementById(topRowId).className) {
         document.getElementById(CurrentId).classList.remove(document.getElementById(CurrentId).className);
         ScorePlayer();
      }
      else {
         document.getElementById(CurrentId).classList.remove(document.getElementById(CurrentId).className);
         ScorePlayer();
         break;
      }
      CurrentId = topRowId;
      var tempRow = parseInt(topRowId.split("_")[0]);
      topRowId = tempRow - 1 + "_" + col;
   }
   gameWin();
}


function getTopRowRight(currentClickId) {
   debugger;
   var row = parseInt(currentClickId.split("_")[0]);
   var col = parseInt(currentClickId.split("_")[1]) + 1;
   var col_1 = parseInt(currentClickId.split("_")[1]) + 2;
   var topRowRightId = row - 1 + "_" + col;
   var CurrentRightId = document.getElementById(currentClickId);
   var topRowRight = document.getElementById(topRowRightId);
   if (CurrentRightId.className == topRowRight.className && CurrentRightId.className == document.getElementById(row - 2 + "_" + col_1).className) {
       removeTopRowRight(currentClickId, topRowRightId)
   }
}

function removeTopRowRight(CurrentRightId, topRowRightId) {
   var row = parseInt(CurrentRightId.split("_")[0]);
   var col = parseInt(CurrentRightId.split("_")[1]) + 1;
   for (var i = col; i <= 15; i++) {
      if (CurrentRightId.split("_")[1] == "15") {
         document.getElementById(CurrentRightId).classList.remove(document.getElementById(CurrentRightId).className);
         ScorePlayer();
         break;
      }
      else if (document.getElementById(CurrentRightId).className == document.getElementById(topRowRightId).className) {
         document.getElementById(CurrentRightId).classList.remove(document.getElementById(CurrentRightId).className);
         document.getElementById(topRowRightId).classList.remove(document.getElementById(topRowRightId).className);
         ScorePlayer();
      }
      else {
         document.getElementById(CurrentRightId).classList.remove(document.getElementById(CurrentRightId).className);
         document.getElementById(topRowRightId).classList.remove(document.getElementById(topRowRightId).className);
         ScorePlayer();
         break;
      }
      CurrentRightId = topRowRightId;
      var tempRow = parseInt(topRowId.split("_")[1]) + 1;
      topRowRightId = tempRow - 1 + "_" + col;
   }
   gameWin();
}

function getTopRowLeft(currentClickId) {
   var row = parseInt(currentClickId.split("_")[0]);
   var col = parseInt(currentClickId.split("_")[1]) - 1;
   var topRowLeftId = row - 1 + "_" + col;
   var CurrentLeftId = document.getElementById(currentClickId);
   var topRowLeft = document.getElementById(topRowLeftId);
   if (CurrentLeftId.className == topRowLeft.className && CurrentLeftId.className == document.getElementById(row - 2 + "_" + col - 2).className) {
      removeTopRowLeft(currentClickId, CurrentLeftId)
   }
}

function removeTopRowLeft(CurrentLeftId, topRowLeftId) {
   var row = parseInt(CurrentLeftId.split("_")[0]);
   var col = parseInt(CurrentLeftId.split("_")[1]) - 1;
   for (var i = col; i >= 1; i--) {
      if (CurrentLeftId.split("_")[1] == "1") {
         document.getElementById(CurrentLeftId).classList.remove(document.getElementById(CurrentLeftId).className);
         ScorePlayer();
         break;
      }
      else if (document.getElementById(CurrentLeftId).className == document.getElementById(topRowLeftId).className) {
         document.getElementById(CurrentLeftId).classList.remove(document.getElementById(CurrentLeftId).className);
         ScorePlayer();
      }
      else {
         document.getElementById(CurrentLeftId).classList.remove(document.getElementById(CurrentLeftId).className);
         ScorePlayer();
         break;
      }
      CurrentLeftId = topRowLeftId;
      var tempRow = parseInt(topRowId.split("_")[1]) - 1;
      topRowLeftId = tempRow - 1 + "_" + col;
   }
   gameWin();
}


function placeBall(CurrentId, ballID) {
   var row = parseInt(CurrentId.split("_")[0]);
   var col = parseInt(CurrentId.split("_")[1]);
   var CurrentTopId = row - 1 + "_" + col;
   for (let i = row; i > 0; i--) {
      if (document.getElementById(CurrentTopId).className != "") {
         document.getElementById(CurrentId).className = ballID.className;
         return CurrentId;
      }
      CurrentId = CurrentTopId;
      var tempRow = parseInt(CurrentTopId.split("_")[0]);
      CurrentTopId = tempRow - 1 + "_" + col;
   }
}


var count = 0;
var ball = 10;
function ScorePlayer() {
   count = ball + count;
   document.getElementById("result").innerHTML = "Player Score = " + count;
   return count;
}


function gameOver() {
   document.getElementById("GameOver").innerHTML = "You Loss Game";
   document.getElementById("GameOver").style.display = "block";
   document.getElementById("playerScore").innerHTML = "Player Score is = " + ScorePlayer();
   document.getElementById("playerScore").style.display = "block";
}


function gameWin() {
   var rowWin = 1;
   var colWin = 1;
   var winFlag = true;
   while (rowWin <= 10) {
      if (document.getElementById(rowWin + "_" + colWin).classList.length != 0) {
         winFlag = false;
         break;
      }
      colWin++;
      if (colWin == 16) {
         colWin = 1;
         rowWin++;
      }
   }
   if (winFlag)
      document.getElementById("playerWin").style.display = "block";
   document.getElementById("playerWin").innerHTML = "You Win";

}