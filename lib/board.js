(function(){
  if ( typeof Snake === "undefined" ){
    Snake = {};
  }

  var Board = Snake.Board = function(snake){
    this.snake = snake; 
    this.apple_pos = [ Math.floor( Math.random()*20), Math.floor(Math.random()*10)];
    this.score = 0;
  };
  Board.width = 15;
  Board.height = 20;
 
  Board.prototype.makeGrid = function(){
    var grid = [];
    for (var i=0; i < Board.height; i++){
      var row = [];
      for (var j=0; j< Board.width; j++){
        row.push(".");
      }
      grid.push(row);
    }
    return grid;
  };

  Board.prototype.snakeEatApple = function(){
    if (this.snake.coord[0][0] === this.apple_pos[0] && this.snake.coord[0][1] === this.apple_pos[1]){
      this.snake.eat(); 
      this.apple_pos = [ Math.floor( Math.random()*5), Math.floor(Math.random()*10)];
      this.score += 10;
    }
  };

  Board.prototype.isSnakeHitWall = function(){
    var height_check = this.snake.coord[0][0] >= Board.height || this.snake.coord[0][0] < 0;
    var width_check = this.snake.coord[0][1] >= Board.width || this.snake.coord[0][1] < 0;
    return width_check || height_check;
  };

  Board.prototype.isWon = function(){
    return this.score >= 30;
  };

  Board.prototype.render = function(){
    if (this.isSnakeHitWall()){
      $('#message').text('You lose!');
      return;
    }
    if (this.isWon()){
      $('#message').text('You won!');
      return;
    }

    var board = this.makeGrid();
    board[this.apple_pos[0]][this.apple_pos[1]] = "A";
    this.snake.coord.forEach(function(pos){
      board[pos[0]][pos[1]] = "S";      
    });
    $('#score').text( "Score:" +this.score);
    $('#board').html("");
    board.forEach(function(row){
      row.forEach(function(grid){
        var $grid = $('<div class="grid"></div>');
        switch(grid){
          case ".":
            $grid.addClass('space');
            break;
          case "A":
            $grid.addClass('apple');
            break;
          case "S":
            $grid.addClass('snake');
            break;
        }
        $('#board').append($grid);
      });
    });
    this.snakeEatApple();
  }
})();
