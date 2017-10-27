var userResponse = prompt ("do you want to play?");
var theGreater = "sherif";


if ( userResponse === "yes") {
 theGreater = prompt("what is your name?");
}

var win = 0;
var player1 = 40;
var player2 = 10;
var playing = true; 

while(playing){
  

     
    player1 -= Math.floor(Math.random() * 2) + 1;
    player2 -= Math.floor(Math.random() *2) + 1;
    console.log ( "enemy health is " + player2);
    console.log (theGreater +  " health is " + player1);
  if (player1 <=0){
      playing = false;
     }
     if (player2 <= 0){
       win++;
       player2 = 10;
     }
       
  if(win === 3) {
    console.log( "i won" );
     playing = false;
  }

  
}