import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      signedIn: true
    });
  },
  actions: {
    signInWithEmail: function(userData) {
      this.controller.model.setProperties({
        email: userData.get('email'),
        signedIn: true
      });
      this.transitionTo('today');
    }
  }
});
