import ENV from 'backlogg/config/environment';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: ENV.APP.adapters.rest.host,
  namespace: ENV.APP.adapters.rest.namespace
});
