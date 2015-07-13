import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return null;
    return Ember.Object.create({
      signedIn: true
    });
  },
  actions: {
    back: function() {
      // hook up listener
    },
    signInWithEmail: function(userData) {
      this.controller.model.setProperties({
        email: userData.get('email'),
        signedIn: true
      });
      this.transitionTo('today');
    }
  }
});
