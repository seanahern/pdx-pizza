import DS from 'ember-data';

var Place = DS.Model.extend({
  name: DS.attr("string"),
  rating: DS.attr("number"),
  website: DS.attr("string"),
  longitude: DS.attr("string"),
  latitude: DS.attr("string"),
  address: DS.attr("object")
});

Place.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Sizzle Pie East",
            rating: 3,
            website: "http://sizzlepie.com",
            latitude: 45.5228198,
            longitude: -122.6591215,
            address: {
                street:"624 E. BURNSIDE ST"
            }
        },
        {
            id: 2,
            name: "Sizzle Pie West",
            rating: 3,
            website: "http://sizzlepie.com",
            latitude: 45.522846,
            longitude: -122.680803,
            address: {
                street: "926 W. BURNSIDE ST."
            }
        },
        {
            id: 3,
            name: "Baby Doll",
            rating: 3,
            website: "http://www.babydollpizza.com/",
            latitude: 45.5195,
            longitude: -122.636446,
            address: {
                street: "2835 SE Stark St."
            }
        },
        {
            id: 4,
            name: "HOTLIPS Hawthorne",
            rating: 2,
            website: "http://hotlipspizza.com/",
            latitude: 45.512371,
            longitude: -122.643274,
            address: {
                street: "2211 SE Hawthorne Blvd"
            }
        },
        {
            id: 5,
            name: "Pyro Pizza",
            rating: 3,
            website: "http://pyropizzacart.com/",
            latitude: 45.5122198,
            longitude: -122.6536268,
            address: {
                street: "SE 12th and Hawthorne Blvd"
            }
        }
    ]
});

export default Place;