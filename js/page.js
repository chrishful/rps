function compChoice(){
var compchoice = Math.floor(Math.random()*3);
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

function bounce(e){
  var comp = document.getElementById('o-img');
  var player = document.getElementById(e);
    player.classList = 'bounce';
    comp.classList = 'bounce';
  //  player.addEventListener('animationend', removeClass(e, 'bounce'));
  setTimeout(function() { removeClass(e, 'bounce'); }, 1000);

}

function removeClass(e, f){
  var g = document.getElementById(e);
  g.classList.remove(f);
  var comp = document.getElementById('o-img');
  comp.classList.remove(f)
}



function start(player){

  var computer = compChoice();
  var count = 0;

      if(player == computer) document.getElementById('result').innerHTML = "It's a tie";
      else { switch (player) {
        case 0:
        if(computer == 1){
          document.getElementById('result').innerHTML = "You lose";
          count--; }
        else {
          document.getElementById('result').innerHTML = "You win!!";
          count++; }
          break;
        case 1:
         if(computer == 2){
           document.getElementById('result').innerHTML = "You lose";
          count--; }
         else{
            document.getElementById('result').innerHTML = "You win!!";
                  count++; }
                  break;
        case 2:
         if(computer == 0){
           document.getElementById('result').innerHTML = "You lose";
          count--; }
         else{
            document.getElementById('result').innerHTML = "You win!!";
                  count++; }
                  break;
        default:
         console.log("there was an error");
         break;
      }
    }


    return count;
}

var comp = 0;
var user = 0;
var tie = 0;
function game(player){
  var i = start(player);
  sessionStorage.setItem("computer", comp);
  sessionStorage.setItem("player", user);
  sessionStorage.setItem("tied", tie);
  if(i < 0){
    comp++;
    sessionStorage.setItem("computer", comp);
}
  else if (i > 0) {
    user++;
    sessionStorage.setItem("player", user);
  }
  else{
    tie++;
    sessionStorage.setItem("tied", tie);
  }
   document.getElementById('tscore').innerHTML = sessionStorage.getItem("tied");
   document.getElementById('pscore').innerHTML = sessionStorage.getItem("player");
   document.getElementById('oscore').innerHTML = sessionStorage.getItem("computer");
}
