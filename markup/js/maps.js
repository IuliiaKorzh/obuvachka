var myCenter=new google.maps.LatLng(49.990566, 36.230027);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);