var character;
playing = prompt(" do you want to play ?");
if (playing === "yes"){
  character = {
    wins:0,
    health:40,
    healsReaming:2,
    name : prompt("whats your name?"),
    generateAttackDamage: function(){
     console.log(health);
    return Math.floor(Math.random()*3) +1;
    },
 
  heal : function(){
    --this.healsRemaing;
  return Math.floor(Math.random() *10) +1;
  }
  };
  function startCombat(name){
while (playing === true){
  
   if (userHealth <= 0){
    console.log("Sucks to lose.");
    break;
  }
    if (enemyHealth <= 0) {
    enemyHealth = 10;
    wins++;
  console.log( name + " won a battle." );
}
   
  var decision = prompt("attack, heal or quit?"); 
   
  if (decision === "attack"){
     
    userHealth -= generateAttackDamage();
    enemyHealth -= generateAttackDamage();
     
  }
  
 else if (decision === "heal"){
    
   character.
  }
  
  else if ( decision === "quit"){
    console.log ( name + " quit !");
    break;
  }
   
  
   
  
}
}
