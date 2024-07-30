const express = require("express");
const app = express();

const port = 8080


app.listen (port, () => {
  console.log(`Server is running oon port ${port}!`);
});

app.get("/", (req, res) => {
  res.send("Hello!");
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
