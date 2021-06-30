var database
var gamestate=0
var playercount=0
var allPlayers;
// global varibles
var player, game, form
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  
  game = new Game()
  game.getstate()
  game.start()  
  

}

function draw(){
  background("white");
  if(playercount==2){
  game.updateState(1)
  }
  if(gamestate===1){
    clear()
    game.play()
  
  }
}
