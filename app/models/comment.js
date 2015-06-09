import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

    task: DS.belongsTo('task'),

    user: DS.belongsTo('user'),

    body: attr('string'),

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
