import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function () {
        var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
            attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
        });

        var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([45.5200, -122.65], 13);

        $("#map").css("height",$(window).outerHeight() - $(".header").outerHeight());

        var newIcon = L.divIcon({ className: 'my-div-icon' });
        var places = this.get('places');

        places.forEach(function(item, index) {
            L.marker([item._data.longitude, item._data.latitude], {icon: newIcon}).bindPopup(item._data.name).addTo(map);
        });
      }
});
