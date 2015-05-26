import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    showDeleteModal: function() {
      console.log('Delete ' + this.get('model.name') + '?');
    }

  }

});