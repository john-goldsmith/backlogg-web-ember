import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

  sprints: DS.hasMany('sprint', {async: true}),

  name: attr('string'),

  slug: attr('string'),

  code: attr('string'),

  userId: attr('number'),

  isActive: attr('boolean', {
    defaultValue: true
  }),

  createdAt: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),

  updatedAt: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  })

});