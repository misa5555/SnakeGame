(function(){
  if (typeof Snake === "undefined"){
    Snake = {};
  }
  
  var Coord = Snake.Coord = function(coords){
    this.coords = coords;
  };

  Coord.prototype.plus = function(dir){
    for( var i = this.coords.length-1; i >= 1; i--){
      this.coords[i][0] = this.coords[i-1][0];
      this.coords[i][1] = this.coords[i-1][1];
    }
    switch (dir) {
      case "N":
        this.coords[0][0] = this.coords[0][0]-1;
        this.coords[0][1] = this.coords[0][1];
        break;
      case "S":
        this.coords[0][0] = this.coords[0][0] + 1;
        this.coords[0][1] = this.coords[0][1];
        break;
      case "W":
        this.coords[0][0] = this.coords[0][0];
        this.coords[0][1] = this.coords[0][1] - 1; 
        break;
      case "E":
        this.coords[0][0] = this.coords[0][0];
        this.coords[0][1] = this.coords[0][1] + 1; 
        break;
    }
    return this.coords;
  };
})();
