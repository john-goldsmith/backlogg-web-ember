import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.all('task');  // Tasks are returned in the sprint model
  }

});