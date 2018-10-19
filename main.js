// The default port number MUST be whatever the Cloud Foundry environment
// has defined in the PORT variable. Otherwise your app will fail to deploy
// to Bluemix with a mysterious health check error.
const port = process.env.PORT || 8080;

// Use the common combination of Express, body-parser, and
// request to handle web traffic and requests.
var express = require('express');
var bodyParser = require('body-parser');
var eventsDao = require('./src/server/db/cloudant/EventsCloudantDao')
var companiesDao = require('./src/server/db/cloudant/CompaniesCloudantDao')
var goalsDao = require('./src/server/db/cloudant/GoalsCloudantDao')
// Create a new express server and set up the body-parser
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serves the index.html
app.use(express.static(__dirname));

// Handle POST requests sent to the /registration URL. Note
// that the /public directory doesn't have anything that
// matches that name. /registration is the value of the
// action attribute on the <form> element in index.html.

// app.post('/registration', function(req, res){
//   // body-parser delivers the body of the request as a JSON
//   // document (req.body), so just pass that on to Cloudant.
//   cloudantDB.insert(req.body, function(err, body, header) {
//     if (err) {
//         console.log(`insert failed! ${err.message}`);
//         res.status(500).send(err.message);
//     } else {
//         console.log('Registration successfully processed!');
//     }
//   });
//   // Now redirect the user to the success page
//   res.redirect("/registered.html");
// });

// Beasy
// Events
app.get('/events', function (req, res) {
    eventsDao.getEvents(req, res)
});

app.post('/events', function (req, res) {
    eventsDao.addEvent(req, res)
});

// Companies
app.get('/companies', function (req, res) {
    eventsDao.getEvents(req, res)
});

app.post('/companies', function (req, res) {
    eventsDao.addEvent(req, res)
});

// Goals
app.get('/goals', function (req, res) {
    goalsDao.getGoals(req, res)
});

app.post('/goals', function (req, res) {
    goalsDao.addGoal(req, res)
});

// start server on the specified port
app.listen(port);
console.log(`Beasy server started on port ${port}....`);
