import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprint', {
      into: 'application'
    });
  },

  model: function(params) {
    // TODO: Need to fetch columns and tasks at this point
    return this.store.fetchById('sprint', params.sprint_id);
  },

  afterModel: function() {
    // this.transitionTo('dashboard');
  }

});