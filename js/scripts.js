/*==============================================================================*\
	Your Website Name

	Scripts File

	Happy Coding!

	Author: Your Name
	Version: 1.0.0
\*==============================================================================*/
$(document).ready(function(){
	console.log("Ready to go!");

	//Our stuff here
	if ( ! Modernizr.objectfit ) {
	  $('.post__image-container').each(function () {
	    var $container = $(this),
	        imgUrl = $container.find('img').prop('src');
	    if (imgUrl) {
	      $container
	        .css('backgroundImage', 'url(' + imgUrl + ')')
	        .addClass('compat-object-fit');
	    }
	  });
	}
});
