/*
var key = 'AIzaSyD5ml66ClOqcZ5H1LHyLiy1Zo15aIIG52Q';

functon initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
        });
        
        }
*/        

// Initialize and add the map 
function initMap() {
    // The location of Uluru
    var uluru = {lat: -1.2466, lng: 5.10535}; 
    // The map, centered at Uluru
    var map = new google.maps.Map( document.getElementById('map_box'), {zoom: 7, center: uluru}); 
    // The marker, positioned at Uluru 
    var marker = new google.maps.Marker({position: uluru, map: map}); 
}
