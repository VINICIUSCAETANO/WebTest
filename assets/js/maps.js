function myMap() {
    var myCenter = new google.maps.LatLng(-31.773306, -52.339054);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
  }