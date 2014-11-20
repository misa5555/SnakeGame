(function(){
  if (typeof Snake === "undefined"){
    Snake = {};
  }
  
  var SnakeBody = Snake.SnakeBody = function(dir, coord){
    this.dir = dir;
    this.coord = coord; 
  };

  SnakeBody.prototype.move = function(){
    var seg = new Snake.Coord(this.coord);
    this.coord = seg.plus(this.dir); 
  };

  SnakeBody.prototype.turn = function(dir){
    this.dir = dir;
  };

  SnakeBody.prototype.eat = function(){
    var tail = this.coord.slice(-1);
    switch(this.dir){
      case "N":
        this.coord.push([tail[0]+1, tail[1]]);
        break; 
      case "S":
        this.coord.push([tail[0]-1, tail[1]]);
        break; 
      case "E":
        this.coord.push([tail[0], tail[1]-1]);
        break; 
      case "W":
        this.coord.push([tail[0], tail[1]+1]);
        break; 
    }
  };
})();
