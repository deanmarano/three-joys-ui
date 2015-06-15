import { moduleForComponent, test } from 'ember-qunit';
/* global moment */

moduleForComponent('recent-calendar', 'Unit | Component | recent calendar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('when today is June 14, 2015, the start day is May 17th 2015', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({beforeDate: moment('2015-06-14')});
  assert.equal(component.get('startDay').format('YYYY-MM-DD'), '2015-05-17');
});

test('when today is June 15, 2015, the start day is May 24th 2015', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({beforeDate: moment('2015-06-15')});
  assert.equal(component.get('startDay').format('YYYY-MM-DD'), '2015-05-24');
});
