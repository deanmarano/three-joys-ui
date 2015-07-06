import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
        {id: 'intro', name: 'Introduction'},
        {id: '1', name: 'Prototyping'}
      ];
  },
});
