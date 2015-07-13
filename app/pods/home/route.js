import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var dayString = "today";
    return Ember.Object.create({
      today: {
        message: "What made you smile %@?".fmt(dayString),
        joys: Ember.A([{text: ''}, {text: ''}, {text: ''}])
      },
      completedDates: [
        '2015-07-04'
      ],
      previousDay: {
        date: "2015-06-12",
        joys: [
          "Buying a necklace for Mom",
          "Walking through Oz Park",
          "Finishing The Happiness Project"
        ]
      }
    });
  }
});
