$(document).ready(function () {
    $("#comments-icon").click(function () {
      $(".chatbox").toggleClass("active");
    });
    $("#close").click(function () {
      $(".chatbox").toggleClass("active");
    });
  
    $("#comments-icon").click(function(){
      $.each($(".animationClass"), function (i, el) {
        $(el).css({ opacity: 0 });
        setTimeout(function () {
          $(el).animate(
            {
              opacity: 1.0,
            },
            800
          );
        },i * 1000);
      });
    });
  });
  