import Ember from 'ember';
import ApplicationAdapter from './application';

var SprintAdapter = ApplicationAdapter.extend({

  /*
   * GET    /api/v1/projects/1/sprints
   * GET    /api/v1/sprints/1
   * POST   /api/v1/sprints
   * PUT    /api/v1/sprints/1
   * DELETE /api/v1/sprints/1
   *
   * References:
   *
   * http://stackoverflow.com/questions/24408892/ember-without-ember-data
   * http://stackoverflow.com/questions/17938294/how-do-you-create-a-custom-adapter-for-ember-js
   *
   */

  // ajaxError: function(jqXHR) {},

  // ajaxSuccess: function(jqXHR, jsonPayload) {},

  // buildURL: function(modelName, id, snapshot, requestType, query) {},

  // createRecord: function(store, type, snapshot) {},

  // deleteRecord: function(store, type, snapshot) {},

  // find: function(store, type, id, snapshot) {},

  // findAll: function(store, type, sinceToken) {},

  // findBelongsTo: function(store, snapshot, url) {},

  // findHasMany: function(store, snapshot, url) {},

  // findMany: function(store, type, ids, snapshots) {},

  // findQuery: function(store, type, query, recordArray) {}

  // generateIdForRecord: function(store, type, inputProperties) {},

  // groupRecordsForFindMany: function(store, snapshots) {},

  // pathForType: function(modelName) {},

  // serialize: function(snapshot, options) {},

  // sortQueryParams: function(obj) {},

  // updateRecord: function(store, type, snapshot) {},

  // urlForCreateRecord: function(modelName, snapshot) {},

  // urlForDeleteRecord: function(id, modelName, snapshot) {},

  // urlForFind: function(id, modelName, snapshot) {},

  // urlForFindAll: function(modelName) {},

  // urlForFindBelongTo: function(id, modelName) {},

  // urlForFindHasMany: function(id, modelName) {},

  // urlForFindMany: function(ids, type, snapshots) {},

  // urlForFindQuery: function(query, modelName) {},

  // urlForUpdateRecord: function(id, modelName, snapshot) {}

});

export default SprintAdapter;