
import injectScript from 'ember-inject-script';

export default {
  name: 'leaflet',
  initialize: function() {
    var url = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js";
    injectScript(url).then(function() {
        var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});
    var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([45.5200, -122.65], 13);
        $("#map").css("height",$(window).outerHeight() - $(".header").outerHeight());
        var newIcon = L.divIcon({ className: 'my-div-icon' });
        var icon = L.marker([45.5228198, -122.6591215], {icon: newIcon}).bindPopup("Sizzle Pie East").addTo(map);
        var icon2 = L.marker([45.522846, -122.680803], {icon: newIcon}).bindPopup("Sizzle Pie West").addTo(map);
        var icon3 = L.marker([45.5195, -122.636446], {icon: newIcon}).bindPopup("Baby Doll Pizza").addTo(map);
        var icon4 = L.marker([45.512371,-122.643274], {icon: newIcon}).bindPopup("HOTLIPs Hawthorne").addTo(map);
        var icon5 = L.markert([45.5122198,-122.6536268], {icon: newIcon}).bindPopup("Pyro Pizza").addTo(map);
    });
  }
};