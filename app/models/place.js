import DS from 'ember-data';

var Place = DS.Model.extend({
  name: DS.attr("string"),
  rating: DS.attr("number"),
  website: DS.attr("string"),
  longitude: DS.attr("string"),
  latitude: DS.attr("string")
});

Place.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Sizzle Pie East",
            rating: 3,
            website: "http://sizzlepie.com",
            longitude: 45.5228198,
            latitude: -122.6591215
        },
        {
            id: 2,
            name: "Sizzle Pie West",
            rating: 3,
            website: "http://sizzlepie.com",
            longitude: 45.522846,
            latitude: -122.680803
        },
        {
            id: 3,
            name: "Baby Doll",
            rating: 3,
            website: "",
            longitude: 45.5195,
            latitude:-122.636446
        },
        {
            id: 4,
            name: "HOTLIPS Hawthorne",
            rating: 2,
            website: "",
            longitude: 45.512371,
            latitude:-122.643274
        },
        {
            id: 5,
            name: "Pyro Pizza",
            rating: 3,
            website: "",
            longitude: 45.5122198,
            latitude:-122.6536268
        }
    ]
});

export default Place;