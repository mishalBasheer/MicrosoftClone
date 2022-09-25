// Get the button
let mybutton = document.getElementById("btt");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 200 && document.body.scrollTop < 1880)|| (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1880)) {

    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
1880