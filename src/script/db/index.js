

var db_interface = function(){

}

db_interface.prototype = {

  query:function (params, callback) {},

  save:function (record, params, callback) {},

  add:function () {}

}

module.exports = function (dbtype) {

  if(dbtype) db_interface.prototype = require('./db.' + dbtype + '.js')
  else console.error('no dbtype')

  return new db_interface()

}