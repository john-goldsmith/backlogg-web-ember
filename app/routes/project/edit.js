import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('project.edit', {
      into: 'application'
    });
  },

  model: function() {
    var project = this.modelFor('project');
    project.set('userId', 1); // TODO
    return project;
  },

  actions: {

    updateProject: function() {
      this.currentModel.save().then(
        function(project) {
          this.transitionTo('project', project);
        }.bind(this),
        function(/*error*/) {

        }
      );
    }

  }

});
