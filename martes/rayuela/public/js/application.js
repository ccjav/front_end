$(document).ready(function() {

  for(var i = 0; i < 100; i++) {
    $("tr").append("<td></td>");
  }
  function juego() {
    var new_game = "&game=" + $( '.table' ).data( "game" );
    $.post( "new_game", new_game, function( data ) {
        console.log( data );
        $( ".table" ).data( "game", data );
        console.log( $( ".table" ).data("game") );
        // $( "#die" ).html( data );
    });

    var n = 3;
    function countDown(){
      n--;
      if(n > 0){
        setTimeout(countDown,1000);
      }
      console.log(n);
    }


    countDown();
    setTimeout(function() {
      function game() {
        $('#Player1 td').eq(2).addClass("active");
        $('#Player1 td').eq(2).siblings().removeClass("active");
        $('#Player2 td').eq(2).addClass("active");
        $('#Player2 td').eq(2).siblings().removeClass("active");
        $('.table tbody').children().removeClass("winner").removeClass("looser");

        var places = {};

        var startPlayer1 = setInterval(function() {
          rayuela("Player1");
        }, 40);

        var startPlayer2 = setInterval(function() {
          rayuela("Player2");
        }, 40);

        function rayuela(player) {
          $("#" + player).find(".active").next().addClass('active').prev().removeClass("active");

          if ($('#' + player + ' .active').index() === 102) {
            if (player == "Player1") {
              clearInterval(startPlayer1);
            } else if (player == "Player2") {
              clearInterval(startPlayer2);
            }
          }

          if ($('#' + player + ' .active').index() > 85) {
            $('#' + player).addClass("looser");
            var endIndex = $('#' + player).index();
            coinStop(player, endIndex);
          }
        }

        $( document ).keyup(function(e) {
          if (e.key == "d") {
            clearInterval(startPlayer1);
            var endIndex = $('#Player1 .active').index();

            coinStop("Player1", endIndex);

          }

          if (e.key == "f") {
            clearInterval(startPlayer2);
            var endIndex = $('#Player2 .active').index();

            coinStop("Player2", endIndex);

          }
        });

        function coinStop(player, endIndex) {
          places[player] = endIndex;

          if (Object.keys(places).length === 2) {
            results(places);
          }
        }

      }
      game();
    }, 3000);
  }

  function results(places) {
    if (places['Player1'] > places['Player2'] && places['Player1'] < 85 && places['Player2'] < 85) {
      $('#Player1').addClass("winner");
      var game = "game=" + $( ".table" ).data("game") + "&player=Player1";
      console.log(game);
      $.post( "results", game, function( data ) {
        console.log( data );
        // $( "#die" ).html( data );
      });
      delete places["Player1"];
      delete places["Player2"];
    } else if (places['Player2'] > places['Player1'] && places['Player2'] < 85 && places['Player1'] < 85) {
      $('#Player2').addClass("winner");
      var game = "game=" + $( ".table" ).data("game") + "&player=Player2";
      console.log(game);
      $.post( "results", game, function( data ) {
        console.log( data );
        // $( "#die" ).html( data );
      });
      delete places["Player1"];
      delete places["Player2"];
    } else if ($("#Player1").hasClass("looser") && places['Player2'] < 85) {
      $('#Player2').addClass("winner");
      var game = "game=" + $( ".table" ).data("game") + "&player=Player2";
      console.log(game);
      $.post( "results", game, function( data ) {
        console.log( data );
        // $( "#die" ).html( data );
      });
      delete places["Player1"];
      delete places["Player2"];
    } else if ($("#Player2").hasClass("looser") && places['Player1'] < 85) {
      $('#Player1').addClass("winner");
      var game = "game=" + $( ".table" ).data("game") + "&player=Player1";
      console.log(game);
      $.post( "results", game, function( data ) {
        console.log( data );
        // $( "#die" ).html( data );
      });
      delete places["Player1"];
      delete places["Player2"];
    }
  }

  $("#start_btn").click(juego);

});








