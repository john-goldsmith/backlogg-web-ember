import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprints', {
      into: 'application'
    });
  },

  model: function() {
    var project = this.modelFor('project'),
        sprints = this.store.find('sprint', {project: project});

    this.store.pushMany('sprint', sprints);
    return sprints;
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }

});