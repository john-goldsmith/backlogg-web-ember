import Ember from 'ember';

export default Ember.Controller.extend({

  project: null,

  actions: {

    deleteProject: function() {
      var project = this.modelFor('project');
      console.log('Deleting project', project.id);
    },

    editProject: function() {
      var project = this.modelFor('project');
      console.log('Deleting project', project.id);
    },

    archiveProject: function() {
      var project = this.modelFor('project');
      console.log('Deleting project', project.id);
    }

  }

});