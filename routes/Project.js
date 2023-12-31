var express = require('express');
const fs = require('fs');
var router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./public/Project/project.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      let errorLog ={"massage":"Error reading JSON file"};
      res.status(500).send(errorLog);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      let errorLog ={"massage":"'Error parsing JSON"};
      console.error('Error parsing JSON:', error);
      res.status(500).send(errorLog);
    }
  });
});

 router.get('/:id',(req,res)=>{
  fs.readFile('./public/Project/project.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      let errorLog ={"massage":"Error reading JSON file"};
      res.status(500).send(errorLog);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const desiredId = req.params.id;
      console.log(desiredId);
      const specificData = jsonData.find(item => item.pid === desiredId);
      console.log(specificData);
      if (specificData) {
        res.json(specificData);
      } else {
        let errorLog ={"massage":'Specific data not found'};
        res.status(404).send(errorLog);
      }
    } catch (error) {
      let errorLog ={"massage":'Error parsing JSON'};
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
  });
});

module.exports = router;