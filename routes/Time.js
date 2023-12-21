const date = require('date-and-time');
var express = require('express');
const fs = require('fs');

var router = express.Router();

router.get('/', (req, res) =>{


    timeNow = date.format(new Date(), 'hh:mm A [UTC]Z');  
    time_data={"Time":timeNow};
    res.json(time_data); 
  
});
router.get('/:time', (req, res) =>{


 
    fs.readFile('./public/Project/project.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          let errorLog ={"massage":"Error reading JSON file"};
          res.status(500).send(errorLog);
          return;
        }
        try {
          const jsonData = JSON.parse(data);
          const desiredTime = req.params.time ;
          console.log(desiredTime);
          const specificTime = jsonData.find(item => item.endTime === desiredTime &&item.startTime === desiredTime  );
          console.log(specificTime);
          if (specificData) {
            res.json(specificTime);
          } else {
            let errorLog ={"massage":'Specific Time not found'};
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