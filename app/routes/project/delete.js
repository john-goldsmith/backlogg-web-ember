import Ember from 'ember';

export default Ember.Route.extend({

  /**
   * TODO: Something here causes the following exception:
   *
   * Uncaught TypeError: Cannot read property 'template' of null
   */
  renderTemplate: function(controller, model) {
    this.render('project.delete', {
      into: 'application',
      outlet: 'modal'
    });
  },

  model: function(params) {
    return this.modelFor('project');
  },

  actions: {

    confirm: function() {
      this.currentModel.destroyRecord()
        .then((response) => {
          // this.disconnectOutlet({
          //   parentView: 'application',
          //   outlet: 'modal'
          // });
          return this.transitionTo('projects');
        }, function() {

        });
    },

    deny: function() {
      this.transitionTo('sprints');
    }

  }

});