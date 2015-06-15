import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var dayString = "today";
    return Ember.Object.create({
      message: "What made you smile %@?".fmt(dayString),
      joys: Ember.A([{}, {}, {}])
    });
  },
  actions: {
    addAnotherJoy: function() {
      this.controller.model.get('joys').pushObject({});
    },
    submit: function() {
      this.transitionTo('home');
    }
  }
});
