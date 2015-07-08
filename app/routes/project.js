import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('project', {
      into: 'application'
    });
  },

  model: function(params) {
    return this.store.find('project', params.project_id)
      .then(function(project) {
        return project;
      },
      () => {
        this.transitionTo('projects');
      });
  },

  afterModel: function(/*model, transition*/) {
    this.transitionTo('sprints');
  }

});
