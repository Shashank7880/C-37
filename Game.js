//oops 
class Game{
    constructor(){
    }
   
    getstate(){
     var gameStateRef= database.ref("gamestate")
     gameStateRef.on("value", (data)=>{
        //  val is going to store the value inside gamestate
       gamestate=data.val()
     })
    }


    updateState(state){
       database.ref("/").update({
           gamestate:state
       })
    }

    start(){
      if(gamestate === 0){
        player = new Player()
        player.getCount()
        form= new Form()
        form.display()
      }
    }

   play(){
    form.hide()
    textSize(30)
    text("Game Started",120,100)
     Player.getplayerInfo()

     //=== == = !== !
     if(allPlayers !== undefined){
       // y position of the player 
       var displayposition= 130
       for (var plr in allPlayers){
        if(plr=== "player"+ player.index){
         fill("green")
        }
        else{
          fill("red")
        } 
       }
       displayposition+=20
        textSize(20)
        // using string concation
        // text(" Score"+ marks, x, y)
        text(allPlayers[plr].Name + ":"+ allPlayers[plr].Distance, 120, displayposition)
     }
   }
}