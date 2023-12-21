var express = require('express');
var router = express.Router();
var fs = require('fs')
var project_List = require("../public/Project/project.json")
/* GET home page. */
router.get('/', function(req, res, next) {
  //test 
 
  //let project = JSON.stringify(fs.readFile('../public/Project/project.json'))
  //res.send(project);
  
  //let a = fs.readFile('../public/Project/project.json');
  //res.send(a);

});


module.exports = router;
