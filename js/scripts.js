/*==============================================================================*\
	Your Website Name

	Scripts File

	Happy Coding!

	Author: Your Name
	Version: 1.0.0
\*==============================================================================*/

// function initMap() {
//     var mapDiv = document.getElementById('map');
//     var map = new google.maps.Map(mapDiv, {
//         center: {lat: -34.074926, lng: 18.816036},
//         zoom: 15
//     });
// }


$(document).ready(function(){
	console.log("Ready to go!");
	function initialize() {
	        var myLatlng1 = new google.maps.LatLng(-34.074926, 18.816036);
	        var mapOptions = {
	            zoom : 15,
	            center : myLatlng1
	        };

	        var map = new google.maps.Map(document.getElementById('map'),
	                mapOptions);

	        var contentString1 = 'Our Offices'

	        var infowindow = new google.maps.InfoWindow({});

	        var marker1 = new google.maps.Marker({
	            position : myLatlng1,
	            map : map,
	            title : 'Park'
	        });
	        google.maps.event.addListener(marker1, 'click', function initialize() {
	            infowindow.close();//hide the infowindow
	            infowindow.setContent(contentString1);//update the content for this marker
	            infowindow.open(map, marker1);

	        });
	    }

    google.maps.event.addDomListener(window, 'load', initialize);

	//Our stuff here
	var $bubbles = $('.bubbles');

	function bubbles() {

	  // Settings
	  var min_bubble_count = 20, // Minimum number of bubbles
	      max_bubble_count = 60, // Maximum number of bubbles
	      min_bubble_size = 3, // Smallest possible bubble diameter (px)
	      max_bubble_size = 12; // Maximum bubble blur amount (px)

	  // Calculate a random number of bubbles based on our min/max
	  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

	  // Create the bubbles
	  for (var i = 0; i < bubbleCount; i++) {
	    $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
	  }

	  // Now randomise the various bubble elements
	  $bubbles.find('.bubble-container').each(function(){

	    // Randomise the bubble positions (0 - 100%)
	    var pos_rand = Math.floor(Math.random() * 101);

	    // Randomise their size
	    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

	    // Randomise the time they start rising (0-15s)
	    var delay_rand = Math.floor(Math.random() * 16);

	    // Randomise their speed (3-8s)
	    var speed_rand = 3 + Math.floor(Math.random() * 9);

	    // Random blur
	    var blur_rand = Math.floor(Math.random() * 3);

	    // Cache the this selector
	    var $this = $(this);

	    // Apply the new styles
	    $this.css({
	      'left' : pos_rand + '%',

	      '-webkit-animation-duration' : speed_rand + 's',
	      '-moz-animation-duration' : speed_rand + 's',
	      '-ms-animation-duration' : speed_rand + 's',
	      'animation-duration' : speed_rand + 's',

	      '-webkit-animation-delay' : delay_rand + 's',
	      '-moz-animation-delay' : delay_rand + 's',
	      '-ms-animation-delay' : delay_rand + 's',
	      'animation-delay' : delay_rand + 's',

	      '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
	      '-moz-filter' : 'blur(' + blur_rand  + 'px)',
	      '-ms-filter' : 'blur(' + blur_rand  + 'px)',
	      'filter' : 'blur(' + blur_rand  + 'px)',
	    });

	    $this.children('.bubble').css({
	      'width' : size_rand + 'px',
	      'height' : size_rand + 'px'
	    });

	  });
	}

	// In case users value their laptop battery life
	// Allow them to turn the bubbles off
	$('.bubble-toggle').click(function(){
	  if($bubbles.is(':empty')) {
	    bubbles();
	    $bubbles.show();
	    $(this).text('Bubbles Off');
	  } else {
	    $bubbles.fadeOut(function(){
	      $(this).empty();
	    });
	    $(this).text('Bubbles On');
	  }

	  return false;
	});

	bubbles();
});
