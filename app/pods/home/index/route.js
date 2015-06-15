import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      date: "2015-06-12",
      joys: [
        "Buying a necklace for Mom",
        "Walking through Oz Park",
        "Finishing The Happiness Project"
      ]
    };
  }
});
