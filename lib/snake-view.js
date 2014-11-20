(function(){
  if (typeof Snake === "undefined"){
    Snake = {};
  }
  
  var View = Snake.View = function(board){
    this.$el = $('#board');
    this.board = board;
    $('body').keydown( (function(event){
      console.log("keydown");
      this.handleKeyEvent(event);
    }).bind(this));
  };

  View.prototype.step = function(){
    var snake = this.board.snake;
    var timer = setInterval( function(){ 
      if (this.board.isSnakeHitWall() || this.board.isWon()){
        console.log("end!");
        clearInterval(timer); 
      }
      snake.move(); 
      this.board.render();
    }, 200);
  };

  View.prototype.handleKeyEvent = function(event){
    switch (event.keyCode){
      case 38:
        this.board.snake.turn("N");
        break;
      case 40:
        this.board.snake.turn("S");
        break;
      case 39:
        this.board.snake.turn("E");
        break;
      case 37:
        this.board.snake.turn("W");
        break;
      default:
        break;
    };
  };

})();
