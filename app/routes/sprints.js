import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprints', {
      into: 'application'
    });
  },

  model: function(/*params*/) {
    var project = this.modelFor('project');
    return project.get('sprints');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }

});