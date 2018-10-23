$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
        document.getElementById("myBtn").style.display = "block";
        $("#myBtn").fadeIn();
    } else {
        document.getElementById("myBtn").style.display = "none";
        $("#myBtn").fadeOut();
    }
}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
  //  document.body.scrollTop = 0; // For Safari
  //  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
//}
