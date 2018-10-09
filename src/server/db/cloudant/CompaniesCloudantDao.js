
if (process.env.VCAP_SERVICES) {
    process.env.CLOUDANT_URL = JSON.parse(process.env.VCAP_SERVICES)
        .cloudantNoSQLDB[0].credentials.url;
} else { // Otherwise look for .env, which is a file of name/value pairs
    require('dotenv').config({ silent: true });
}

// Just hardcoding the database name, should probably be an env var
const dbname = 'companies';

// Credentials should be in order, so we're ready to go now. If not,
// this is going to fail pretty quickly.

var Cloudant = require('cloudant');
var cloudant, cloudantDB;

// Now open the database. If it doesn't exist, it is created. The URL
// for Cloudant is in the form https://user name:password@address, so
// we don't have to pass the username and password separately.
cloudant = Cloudant(process.env.CLOUDANT_URL);
cloudant.db.create(dbname);
cloudantDB = cloudant.use(dbname);

if (cloudantDB === null)
    console.warn('Could not find or create the database: ' + dbname);
else
    console.log('The database: ' + dbname + ' seems to be fine.');

module.exports.getCompanies = (req, res) => {
    cloudantDB.list({ include_docs: true }, function (err, data) {
        const allDocs = data.rows.map(row => row.doc)
        res.setHeader('Content-Type', 'application/json');
        res.send(allDocs);
    })
}

module.exports.addCompany = (req, res) => {
    cloudantDB.insert(req.body, function (err, body, header) {
        if (err) {
            console.log(`insert failed! ${err.message} on ${dbname}`);
            res.status(500).send(err.message);
        } else {
            console.log('New company was successfully processed! with body: ');
            console.log(req.body);
        }
    })
}

