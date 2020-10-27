class Game {
  constructor(){

  }

  getState(){
    var gamestateRef  = database.ref('gamestate');
    gamestateRef.on("value",function(data){
       gamestate = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gamestate === 0){
      player = new Player();
      var playercountRef = await database.ref('playercount').once("value");
      if(playercountRef.exists()){
        playercount = playercountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1img)
    car2 = createSprite(300,200);
    car2.addImage("car2",car2img)
    car3 = createSprite(500,200);
    car3.addImage("car3",car3img)
    car4 = createSprite(700,200);
    car4.addImage("car4",car4img)
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getrank();


    if(allPlayers !== undefined){
      background("brown")
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10)
          fill("brown")
          ellipse(x,y,60,60)
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
      
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
if(player.distance>3860)
{
  gamestate = 2
  player.rank = player.rank + 1
  Player.updateplayerrank(player.rank)
 if(player.rank === 1)
 {
   form.hide2()
 }
}
    drawSprites();
  }
  end()
  {
    console.log("Game Ended")
    console.log(player.rank)
  }

}
