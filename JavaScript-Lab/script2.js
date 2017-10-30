/* part 2 of creating the game */
var playing = true;
var userHealth = 40;
var enemyHealth = 10;
var wins = 0;

function startGame(){
  var playing = prompt("Would you like to play a game? ") ;

if ( playing === "yes"){
  var name = prompt("Please enter your name!");


startCombat(name);
}
else ("ok. may be next time");
}

function getDamged(){
  return Math.floor(Math.random() *5) + 1;
}
function startCombat(name){
   
   while (playing === true){
   
   console.log( name  + "has " + userHealth + "health" + "!" );
   
   console.log("Grant the mighty chicken has " + enemyHealth + " halth" + " !");
   
   if (userHealth <= 0){
    console.log("Sucks to suck, nerd.");
    break;
  }
    if (enemyHealth <= 0) {
     enemyHealth = 10;
     wins++;
 console.log( name + " won a battle." );
}
   
  var decision = prompt("attack or quit?"); 
   if (decision === "attack"){
     getDamged();
     userHealth -= getDamged();
     enemyHealth -= getDamged();
     
   }
   if ( decision === "quit"){
     console.log ( name + " quit !");
     break;
   }
   
   if (wins === 3){
      console.log( name + " wins.");
      break;
    }
   
    startCombat(name);
}
}
startGame();
