import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.route('places', function() { });
    this.route('about', function() { });
    this.route('submit', function() { });
});
