import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

    sprint: DS.belongsTo('sprint'),

    tasks: DS.hasMany('task', {async: true}),

    name: attr('string'),

    slug: attr('string'),

    sprintId: attr('number'),

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
