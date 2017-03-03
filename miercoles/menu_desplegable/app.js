$(document).ready(function() {
  $('.hover-item').hover(function () {
      $('.submenu').css("display", "flex");
    }, function () {
      $('.submenu').css("display", "none");
    }
  );
});