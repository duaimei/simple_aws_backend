const Thing = require('../../models/thing.model')

exports.list = function (res) {
  return Thing.query().then((result) => {
    return res.status(200).json(result)
  })
}