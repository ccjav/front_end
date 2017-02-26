$(document).ready(function() {

  for(var i = 0; i < 100; i++) {
    $("tr").append("<td></td>");
  }

  function game() {
    $('#Player1 td').eq(2).addClass("active");
    $('#Player1 td').eq(2).siblings().removeClass("active");
    $('#Player2 td').eq(2).addClass("active");
    $('#Player2 td').eq(2).siblings().removeClass("active");

    var startPlayer1 = setInterval(function() {
      rayuela("Player1");
    }, 40);

    var startPlayer2 = setInterval(function() {
      rayuela("Player2");
    }, 40);

    var places = {}

    function rayuela(player) {
      $("#" + player).find(".active").next().addClass('active').prev().removeClass("active");
      if ($('#' + player + ' .active').index() === 102) {
          clearInterval(startPlayer1);
          clearInterval(startPlayer2);
          // fruits[player] = $('#' + player + ' .active').index();
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
      console.log("acabó " + player + " " + endIndex);
      console.log("objeto")
      console.log(places)
      if (Object.keys(places).length === 2) {
        results(places);
      }

    }

    function results(places) {
      console.log("lugares");
      console.log(places);
    }
  }

  $("#start_btn").click(game);



  // var fruits = {};
  // function rayuela(player) {

  //   var rayy = setInterval(function() {
  //     $("#" + player).find(".active").next().addClass('active').prev().removeClass("active");
  //     if ($('#' + player + ' .active').index() === 102) {
  //       clearInterval(rayy);
  //       // fruits[player] = $('#' + player + ' .active').index();
  //       console.log(fruits)
  //     }
  //     if ($('#' + player + ' .active').index() === 85) {
  //       $('#' + player).addClass("looser");
  //     }
  //   }, 40);

  //

  //     if (fruits['Player1'] > fruits['Player2'] && fruits['Player1'] < 85 && fruits['Player2'] < 85) {
  //       $('#Player1').addClass("winner");
  //       console.log("gana 1");
  //       fruits = {};
  //     } else if (fruits['Player2'] > fruits['Player1'] && fruits['Player2'] < 85 && fruits['Player1'] < 85) {
  //       $('#Player2').addClass("winner");
  //       console.log("gana 2");
  //       fruits = {};
  //     } else if ($("#Player1").hasClass("looser") && fruits['Player2'] < 85) {
  //       $('#Player2').addClass("winner");
  //       console.log("gana 2 def");
  //       fruits = {};
  //     } else if (fruits['Player2'] === 102) {
  //       $('#Player1').addClass("winner");
  //       console.log("gana 1 def");
  //       fruits = {};
  //     }
  //     console.log(fruits['Player2'])
  //   });

  // }
  // // setTimeout(rayuela('Player2'), 3000);
  // // rayuela('Player2');
  // // rayuela("Player1");
  // function rayuelas() {

  //   $('#Player1').removeClass("winner");
  //   $('#Player2').removeClass("winner");
  //   $('#Player1').removeClass("looser");
  //   $('#Player2').removeClass("looser");
  //   rayuela('Player1');
  //   rayuela('Player2');
  // }
  // $("#start_btn").click(rayuelas);
});








