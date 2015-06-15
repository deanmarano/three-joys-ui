import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },
  actions: {
    showSignInWithEmail: function() {
      this.controller.toggleProperty('signingInWithEmail');
    }
  }
});
