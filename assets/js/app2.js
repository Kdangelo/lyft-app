$(document).ready(function(){
  $("#demo").intlTelInput();

  $('#demo').keyup(function() {
    var num = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (num.length == 10) {
        $('#phone').removeAttr('disabled');
      }else{
        $('#phone').attr('disabled','disabled');
      };
    };
  });
});
