import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('sprint', {
      into: 'application'
    });
  },

  model: function(params) {
    var model = {};

    model.project = this.modelFor('project');
    return this.store.find('sprint', params.sprint_id).then(function(sprint) {
      model.sprint = sprint;
      model.columns = sprint.get('columns');
      return model;
    });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }

});