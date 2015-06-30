import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('projects.new', {
      into: 'application'
    });
  },

  model: function() {
    var project = this.store.createRecord('project');
    project.userId = 1 // TODO
    return project;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  },

  actions: {

    createProject: function() {
      this.currentModel.save().then(
        function(project) {
          this.transitionTo('projects');
        }.bind(this),
        function(error) {

        }
      );
    }

  }

});