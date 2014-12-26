import Ember from 'ember';
import DS from 'ember-data';

var Shop = DS.Model.extend({
    name: DS.attr("string"),
    longitude: DS.attr("number"),
    latitude: DS.attr("number")
})

Shop.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Sizzle Pie East",
            longitude: 45.5228198,
            latitude: -122.6591215
        },
        {
            id: 2,
            name: "Sizzle Pie West",
            longitude: 45.522846,
            latitude: -122.680803
        }
    ]
})

export default Shop;
