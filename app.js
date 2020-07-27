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
/* Adding a generic json middleware */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.use((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

/*  POST /login gets urlencoded bodies */
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser ,(req,res)=>{
    console.log(req.body);
    res.send('welcome')
});

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {    
  })

/*=========================================================
                            CORS
===========================================================
*/

//To enable all cors request.
app.get('/products/:id', (req, res, next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  
  app.listen(80,  () =>{
    console.log('CORS-enabled web server listening on port :"3000" ')
  })


/*=========================================================
                            MORGAN
===========================================================
*/

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
});