var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// connect mysql

var conn = mysql.createConnection(models.mysql)
conn.connect()

var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// add user api

router.post('/adduser', (req,res) => {
  var sql = $sql.user.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err)
    } 
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router