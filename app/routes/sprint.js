import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprint', {
      into: 'application'
    });
  },

  model: function(params) {
    // var sprints = this.modelFor('sprints');
    return this.store.find('sprint', params.sprint_id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }

});