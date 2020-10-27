class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playercountRef = database.ref('playercount');
    playercountRef.on("value",(data)=>{
      playercount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playercount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  rp()
  {
    var p = database.ref('players')
    p.remove()
  }
  getrank()
  {
    var playerrank = database.ref('playerrank');
    playerrank.on("value",(data)=>{
    this.rank = data.val();
    })
  }
  static updateplayerrank(rank)
    {
      database.ref('/').update({
        playerrank: rank
      });
    }
}
