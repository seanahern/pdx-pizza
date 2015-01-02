import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('places', function() { });
  this.resource('about', function() { });
  this.resource('submit', function() { });
  this.resource('p', { path: 'p/:p_id' }, function() { });
});

export default Router;
