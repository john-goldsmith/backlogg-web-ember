import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('project.delete', {
      into: 'application'
    });
  },

  actions: {

    didTransition: function() {
      this.controllerFor('project').send('showDeleteModal');
    }

  }

});