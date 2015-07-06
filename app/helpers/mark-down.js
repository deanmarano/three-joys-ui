import Ember from 'ember';
/* global marked */

export function markDown(params) {
  return Ember.String.htmlSafe(marked(params[0]));
}

export default Ember.HTMLBars.makeBoundHelper(markDown);
