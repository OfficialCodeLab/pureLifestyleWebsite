

$(document).ready(function(){});

function initialize() {
    var myLatlng1 = new google.maps.LatLng(-34.074926, 18.816036);
    var mapOptions = {
        zoom : 15,
        center : myLatlng1,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

    var contentString1 = 'Pure Lifestyle'

    var infowindow = new google.maps.InfoWindow({});

    var marker1 = new google.maps.Marker({
        position : myLatlng1,
        map : map,
        title : 'Pure Lifestyle'
    });
    google.maps.event.addListener(marker1, 'click', function initialize() {
        infowindow.close();//hide the infowindow
        infowindow.setContent(contentString1);//update the content for this marker
        infowindow.open(map, marker1);

    });
}
