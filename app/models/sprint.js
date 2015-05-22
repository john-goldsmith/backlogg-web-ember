import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  // sprints: DS.hasMany('column'),

  name: attr('string'),

  slug: attr('string'),

  starts_at: attr('data', {
    defaultValue: function() {
      return new Date();
    }
  }),

  ends_at: attr('data', {
    defaultValue: function() {
      return new Date();
    }
  }),

  project_id: attr('number'),

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