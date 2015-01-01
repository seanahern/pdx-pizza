import Ember from 'ember';

/* globals $, L */

export default Ember.Component.extend({
    didInsertElement: function () {
        var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
            attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
        });

        var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([45.5200, -122.65], 13);

        $("#map").css("height",$(window).outerHeight() - $(".header").outerHeight());

        var newIcon = L.icon({
            iconUrl: 'images/pizza-icon.png',

            iconSize:     [28, 40], // size of the icon
            iconAnchor:   [14, 40], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
        });
        var places = this.get('places');

        places.forEach(function(item) {
            L.marker([item._data.latitude,item._data.longitude], {icon: newIcon}).bindPopup(item._data.name).addTo(map);
        });
      }
});
