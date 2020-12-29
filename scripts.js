var check = 1
// Set the Button
button_top = $("#button-top");

// When the user scrolls down, show the button
$(window).scroll(function(){scrollFunction()});

function scrollFunction() {
  if ($('body').scrollTop(0) > 650 || $('body,html').scrollTop() > 650) {
    button_top.css("display","block");
  } else {
    button_top.css("display","none");
  }
}

// Function to go to TOP
function topFunction() {
  $('body').scrollTop(0); // For Safari
  $('body,html').scrollTop(0); // For Chrome, Firefox, IE and Opera
}

button_top.click(topFunction())

$("#flexSwitchCheckDefault").click(function() {
  if( $('#flexSwitchCheckDefault').prop('checked') ) {
    $("body").addClass("dark");
  } else {
    $("body").removeClass("dark");
  }
});
