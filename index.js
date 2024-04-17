const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const resultData = [
   {
    firstName: 'Mahidul',
    lastName: 'Islam',
    dob: '02/08/1998',
    passportOrId: 'A06017401',
    result: {
      listening: 7,
      speaking: 6
    }
   },
   {
      firstName: 'John',
      lastName: 'Doe',
      dob: '01/15/1995',
      passportOrId: 'id',
      result:{
        speaking: 7,
        listening: 6
      }
   },
];

// routings
app.get('/', (req, res) => {
   console.log('running backend well');
   res.send('running backend well Mahidul Islam');
});

app.post('/result-form', (req, res) => {
   const {firstName, lastName, dob, passportOrId} = req?.body;

   // Filter resultData based on request body
   const filteredResult = resultData.filter(data => {
      return (
         data.firstName === firstName &&
         data.lastName === lastName &&
         data.dob === dob &&
         data.passportOrId === passportOrId
      );
   });

   if (filteredResult.length > 0) {
      // If there is a match, send the matched result
      res.send(filteredResult);
   } else {
      // If there is no match, send a response indicating no match
      res.send({message: 'No matching result found'});
   }
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port})`);
});
