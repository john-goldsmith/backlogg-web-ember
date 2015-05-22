import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprints', {
      into: 'application'
    });
  },

  model: function() {
    this.store.find('sprint');
  },

  setupController: function(controller, model) {
    console.log();
  }

});