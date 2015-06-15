import Ember from 'ember';
/* global _ */

export default Ember.Component.extend({
  startDay: Ember.computed('beforeDate', function() {
    if(this.get('beforeDate').day() === 0) {
      return this.get('beforeDate').clone().day(0).day(-28);
    } else {
      return this.get('beforeDate').clone().day(0).day(-21);
    }
  }),
  previousWeeks: Ember.computed('startDay', 'beforeDate', function() {
    var beforeDate = this.get('beforeDate');
    return _.range(28).map((i) => {
      return this.get('startDay').clone().add(i, 'days');
    }).filter((d) => {
      return beforeDate.diff(d, 'days') > 0;
    }).map((d) => {
      return {
        display: d.format('D'),
        link: d.format('YYYY-MM-DD')
      };
    });
  }),
  splitInWeeks: Ember.computed('previousWeeks', function() {
    return _.chunk(this.get('previousWeeks'), 7);
  })
});
