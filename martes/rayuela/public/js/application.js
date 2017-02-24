$(document).ready(function() {

  for(var i = 0; i < 100; i++) {
    $("tr").append("<td></td>");
  }
 

  var fruits = {};
  function rayuela(player) {

    var rayy = setInterval(function() {
      $("#" + player).find(".active").next().addClass('active').prev().removeClass("active");
      if ($('#' + player + ' .active').index() === 102) {
        clearInterval(rayy);
        // fruits[player] = $('#' + player + ' .active').index();
        console.log(fruits)
      }
      if ($('#' + player + ' .active').index() === 85) {
        $('#' + player).addClass("looser");
      }
    }, 40);

    $( document ).keyup(function(e) {
      if (player == "Player1") {
        if (e.key == "d") {   
          clearInterval(rayy);
          fruits['Player1'] = $('#' + player + ' .active').index();
        }  
      }
      if (player == "Player2") {
        if (e.key == "f") { 
          clearInterval(rayy);
          fruits['Player2'] = $('#' + player + ' .active').index();
        }
      } 

      if (fruits['Player1'] > fruits['Player2'] && fruits['Player1'] < 85 && fruits['Player2'] < 85) {
        $('#Player1').addClass("winner");
        console.log("gana 1");
        fruits = {};  
      } else if (fruits['Player2'] > fruits['Player1'] && fruits['Player2'] < 85 && fruits['Player1'] < 85) {
        $('#Player2').addClass("winner");
        console.log("gana 2"); 
        fruits = {};
      } else if ($("#Player1").hasClass("looser") && fruits['Player2'] < 85) {
        $('#Player2').addClass("winner");
        console.log("gana 2 def"); 
        fruits = {};
      } else if (fruits['Player2'] === 102) {
        $('#Player1').addClass("winner");
        console.log("gana 1 def"); 
        fruits = {};
      } 
      console.log(fruits['Player2'])
    });

  }
  // setTimeout(rayuela('Player2'), 3000);
  // rayuela('Player2');
  // rayuela("Player1");
  function rayuelas() {
    $('#Player1 td').eq(2).addClass("active");
    $('#Player1 td').eq(2).siblings().removeClass("active");
    $('#Player2 td').eq(2).addClass("active");
    $('#Player2 td').eq(2).siblings().removeClass("active");
    $('#Player1').removeClass("winner");
    $('#Player2').removeClass("winner");
    $('#Player1').removeClass("looser");
    $('#Player2').removeClass("looser");
    rayuela('Player1');
    rayuela('Player2');
  }
  $("#start_btn").click(rayuelas);
});








