import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('task', {
      into: 'application'
    });
  },

  model: function(params) {
    var model = {};

    return this.store.find('task', params.task_id).then(function(task) {
      model.task = task;
      model.comments = task.get('comments');
      console.log(model);
      return model;
    });
  }

});