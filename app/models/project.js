import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  // sprints: DS.hasMany('sprint'),

  name: attr('string'),

  slug: attr('string'),

  code: attr('string'),

  user_id: attr('number'),

  is_active: attr('boolean', {
    defaultValue: true
  }),

  created_at: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),

  updated_at: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  })

});