import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-in');
  this.route('sign-up');
  this.route('signed-in', {path: '/app'}, function() {
    this.route('today');
  });
});

export default Router;
