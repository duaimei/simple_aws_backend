const { Model } = require('objection');

class Thing extends Model {
  static tableName = 'things';
  static jsonSchema = {
    type: Object,
    required: ['name'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string'}
    }
  };
}
module.exports = Thing