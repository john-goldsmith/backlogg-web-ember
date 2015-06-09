import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.all('column'); // Columns are returned in the sprint model
  }

});