function compChoice(){
var compchoice = Math.floor(Math.random()*3);
console.log("function is working");
 if(compchoice == 0){
   document.getElementById('o-img').src ="svg/rock.svg";
   return 0;
 }
 else if(compchoice == 1){
   document.getElementById('o-img').src ="svg/paper.svg";
   return 1;
 }
 else{
   document.getElementById('o-img').src ="svg/scissors.svg";
   return 2;
 }
}

function start(player){
  var computer = compChoice();
      if(player == computer) document.getElementById('result').innerHTML = "It's a tie";
      else { switch (player) {
        case 0:
        if(computer == 1) document.getElementById('result').innerHTML = "You lose";
        else document.getElementById('result').innerHTML = "You win!!";
          break;
        case 1:
         if(computer == 2) document.getElementById('result').innerHTML = "You lose";
         else document.getElementById('result').innerHTML = "You win!!";
         break;
        case 2:
         if(computer == 0) document.getElementById('result').innerHTML = "You lose";
         else document.getElementById('result').innerHTML = "You win!!";
         break;
        default:
         console.log("there was an error");
         break;
      }
    }
}
