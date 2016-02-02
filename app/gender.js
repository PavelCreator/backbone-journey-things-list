setTimeout(function () {
  $(".male").addClass('maleFlag');
  $(".female").addClass('femaleFlag');
  $(document).on("click", "#male", function () {
    $(".maleFlag").toggleClass('male');
    $(".maleSpan").toggleClass('strikethrough');
  });
  $(document).on("click", "#female", function () {
    $(".femaleFlag").toggleClass('female');
    $(".femaleSpan").toggleClass('strikethrough');
  });
}, 1500);