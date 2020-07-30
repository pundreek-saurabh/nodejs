const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/*=========================================================
                            CORS
===========================================================
*/

app.use(cors());



/*=========================================================
                            MORGAN
===========================================================
*/
 
app.use(morgan('dev'));
