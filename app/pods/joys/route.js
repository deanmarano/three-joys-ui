import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('home').get('today');
  },

  actions: {
    handleAction: function() {
      this.transitionTo('home');
    },
    addAnotherJoy: function() {
      this.controller.model.get('joys').pushObject({});
    }
  }
});
