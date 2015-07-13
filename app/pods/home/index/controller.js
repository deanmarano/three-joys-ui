import Ember from 'ember';
/* global moment */

export default Ember.Controller.extend({
  todayLink: Ember.computed(function() {
    return this.get('today').format('YYYY-MM-DD');
  }),
  today: Ember.computed(function() {
    return moment();
  }),
  dayOfWeek: Ember.computed(function() {
    return moment().format('dddd');
  }),
  lastDay: Ember.computed('model.previousDay.date', function() {
    var lastDay = moment(this.get('model.previousDay.date'));
    var daysAgo = moment().diff(lastDay, 'days');
    if(daysAgo === 0) {
      return "Today";
    } else if(daysAgo === 1) {
      return "Yesterday";
    } else if(1 < daysAgo && daysAgo < 7) {
      return lastDay.format('dddd');
    } else {
      return lastDay.format('dddd, MMMM Do');
    }
  })
});
