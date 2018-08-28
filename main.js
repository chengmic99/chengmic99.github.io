// for debugging whats causing horizontal overflow
function checkHorizontalOverflow(){ 
	var docWidth = document.documentElement.offsetWidth;
	[].forEach.call(
	  document.querySelectorAll('*'),
	  function(el) {
	    if (el.offsetWidth > docWidth) {
	      console.log(el);
	    }
	  }
	);
}

function initPage(){
	$('.carousel').carousel();
}