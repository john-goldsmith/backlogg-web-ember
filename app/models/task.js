import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

    column: DS.belongsTo('column'),

    comments: DS.hasMany('comment', {async: true}),

    name: attr('string'),

    slug: attr('string'),

    columnId: attr('number'),

    parentTask: attr('number'),

    commentsAllowed: attr('boolean'),

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
