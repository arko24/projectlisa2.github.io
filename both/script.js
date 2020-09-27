$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  
  
// document ready  
});





window.onload = function() {
 // executes when complete page is fully loaded, including all frames, objects and images
console.log("window is loaded");

$('.open-form').click(function() {
		$('.form-popup').show();
	});
	$('.close-form').click(function() {
		$('.form-popup').hide();
	});
  
	$('.reset-form').click(function() {
		$('.success-message').show();
    $('#my-form').trigger( 'reset' );

    setTimeout(function() {
	    $('.success-message').hide()
    }, 1500);
	});

	$(document).mouseup(function(e) {
		var container = $(".form-wrapper");
		var form = $(".form-popup");

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			form.hide();
		}
	});

  
  
// window load  
};