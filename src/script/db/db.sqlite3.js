var sqlite3 = require('sqlite3').verbose()
var fs = require("fs")

var db = new sqlite3.Database('sqlite3.db')


fs.readFile('src/script/db/db.sqlite3.sql','utf-8', function(err,data){  
  if(err){  
      console.log("error");  
  }else{  
      db.run(data)
  }  
})


var implement = {

  query: function (params, callback) {

    db.all(`SELECT rowid,* FROM ${params.tbname} `, function(err, rows) {
      callback(rows)
    })

  },

  save: function (record, params, callback) {

    let sql = "",stmt = null

    record.forEach(function (row,index) {

      let values = [],fields = [],place = []

      for(let field in row){
        values.push(row[field])
        fields.push(field)
        place.push('?')
      }

      if(index == 0){
        stmt = db.prepare("INSERT OR REPLACE INTO " +params.tbname+ "(" + fields.join(',') + ") VALUES (" + place.join(',') + ")");
      }
      stmt.run(values)
    })

    stmt.finalize()

    callback(true)
  },

  add: function () {
      alert('implement-add')
  },

  close: function () {
    db.close()
  }
}


module.exports = implement