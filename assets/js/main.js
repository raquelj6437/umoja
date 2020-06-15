$(document).ready(function(){
  $(window).resize(function() {
    if ($(this).width() < 1024) {
      $('#umoja-logo').hide();
      $('#home-button').show();
    } else {
      $('#umoja-logo').show();
      $('#home-button').hide();
      }
  });
});
