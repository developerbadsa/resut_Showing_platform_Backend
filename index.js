const express = require('express');
const app = express();
const cors = require('cors');
const port = 3003;
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(
   cors({
      origin: ['http://localhost:5173', 'https://result-showing-platform-frontend.vercel.app', 'https://willowy-dasik-f78ba2.netlify.app','https://bdsielts.info']
   })
);

const resultData = [
   {
      id: 'd1',
      firstName: 'Mahidul',
      lastName: 'Islam',
      dob: '02/08/1998',
      candidateNumber:'016483',
      trfNumber:'23BD016483ISLM050A',
      centerNumber: 'BD050',
      testDate: '28/08/2023',
      passportOrId: 'A06027401',
      "result": [
         { "score": "6.0", "name": "speaking" },
         { "score": "6.5", "name": "listening" },
         { "score": "6.0", "name": "reading" },
         { "score": "5.5", "name": "writing" },
         { "score": "6.0", "name": "overall" }
       ]
   },
   // {
   //    id: 'd2',
   //    firstName: 'John',
   //    lastName: 'Doe',
   //    dob: '01/15/1995',
   //    passportOrId: 'id',
   //    result: {
   //       speaking: 7,
   //       listening: 6,
   //    },
   // },
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

   // console.log(req?.body)

   if (filteredResult.length > 0) {
      // If there is a match, send the matched result
      console.log(...filteredResult)
      res.send(...filteredResult);
   } else {
      // If there is no match, send a response indicating no match

      // console.log()
      res.send({message: 'No matching result found'});
   }
});

app.get('/get-result-by-id', (req, res) => {
   const {id} = req?.query



   // Filter resultData based on request body
   const filteredResult = resultData.filter(data => {
      return (
         data.id === id 
      );
   });
   // console.log('data ase kina deko',filteredResult)
   // console.log(req?.body)

   if (filteredResult.length > 0) {
      // If there is a match, send the matched result
      // console.log(...filteredResult)
      res.send(...filteredResult);
   } else {
      // If there is no match, send a response indicating no match 

      // console.log()
      res.send({message: 'No matching result found'});
   }
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port})`);
});
