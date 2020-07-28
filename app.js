const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

/*=========================================================
                    BODY-PARSER
===========================================================
*/

const body =(req, res, next) =>{
  console.log('Body-parser middleware');
  next();
}; 


/*=========================================================
                            CORS
===========================================================
*/


const element =(req, res, next) =>{
  console.log('cors middleware');
  next();
};


/*=========================================================
                            MORGAN
===========================================================
*/

const morgan =(req, res, next) =>{
  console.log('Morgan middleware');
  next();
};
