import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

  project: DS.belongsTo('project'),

  // columns: DS.hasMany('column'),

  name: attr('string'),

  slug: attr('string'),

  startsAt: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),

  endsAt: attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),

  projectId: attr('number'),

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