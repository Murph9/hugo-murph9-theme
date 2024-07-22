// allow toggle menu
$(document).ready(function() {
  $('#sidemenuCollapse').on('click', function() {
    $('#sidemenu').toggleClass('hide');
  });
  // hide menu by default
  var mq = window.matchMedia("(max-width: 800px)");
  if (mq.matches) {
    $('#sidemenu').toggleClass('hide');
  }
});
