import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

  comments: DS.hasMany('comment'),

  screenName: attr('string'),

  firstName: attr('string'),

  lastName: attr('string'),

  email: attr('string'),

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
