import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'}, function() {
    this.resource('joys', {path: '/joys/:date'});
    this.resource('settings');
  });
  this.resource('sign-in');
  this.resource('sign-up');
  this.resource('blog', function() {
    this.route('post', {path: ':postId'});
  });
});

export default Router;
