import ApplicationAdapter from './application';

var SprintAdapter = ApplicationAdapter.extend({

  find: function(store, type, id, snapshot) {
    // this._super(store, type, id, snapshot);
    return this.ajax('http://www.google.com', 'GET');
  }

});

export default SprintAdapter;