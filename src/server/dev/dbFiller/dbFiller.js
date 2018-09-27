const dummyEvents = [{
    companyName: "IBM",
    title: "looking for start ups",
    date: "September 14, 2018",
    body: "We looking for start ups to use our amazing Watson API",
    id: 1
},
{
    companyName: "Microsoft",
    title: "looking for event place",
    date: "September 17, 2018",
    body: "We looking for a large place to host our next event",
    id: 2
},
{
    companyName: "Coca Cola",
    title: "looking for events to promote new product",
    date: "September 21, 2018",
    body: "We looking for large events to promote our new product Coca Cola Null",
    id: 3
}]

const fillDBWithDummyEvents = (cloudantDB) => (
    this.events.forEach(event => {
        cloudantDB.insert(event, function(err, body, header) {
            if (err) {
                console.log(`insert failed! ${err.message}`);
                res.status(500).send(err.message);
            } else {
                console.log('New event was successfully processed! with body: ');
                console.log(event);
            }
          });
    })
);

export default {dummyEvents, fillDBWithDummyEvents};