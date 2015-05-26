import ENV from 'backlogg/config/environment';
import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({

  host: ENV.APP.adapters.rest.host,

  namespace: ENV.APP.adapters.rest.namespace

});