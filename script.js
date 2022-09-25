// Get the button
let mybutton = document.getElementById("btt");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.documentElement.clientWidth>1186){

    if ((document.body.scrollTop > 200 && document.body.scrollTop < 1880)|| (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1880)) {
  
      mybutton.style.display = "block";
      
    } else {
      mybutton.style.display = "none";
    }
  }else if(document.documentElement.clientWidth>763){
    if ((document.body.scrollTop > 150 && document.body.scrollTop < 3031)|| (document.documentElement.scrollTop > 150 && document.documentElement.scrollTop < 3031)) {
  
      mybutton.style.display = "block";
      
    } else {
      mybutton.style.display = "none";
    }

  }else{
    if ((document.body.scrollTop > 100 && document.body.scrollTop < 5800)|| (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 5800)) {
  
      mybutton.style.display = "block";
      
    } else {
      mybutton.style.display = "none";
    }

  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
1880