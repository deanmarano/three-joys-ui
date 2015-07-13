import Ember from 'ember';

export default Ember.Component.extend({
  completed: Ember.computed('joy.text', 'focused', function() {
    return this.get('joy.text') && !this.get('focused');
  }),
  rows: Ember.computed('joy.text', 'focused', function() {
    if(this.get('focused')) {
      return Math.max(2, this.get('joy.text').split('\n').length);
    } else {
      return 1;
    }
  }),
  actions: {
    focusIn: function() {
      this.set('focused', true);
    },
    focusOut: function() {
      this.set('focused', false);
    }
  }
});
