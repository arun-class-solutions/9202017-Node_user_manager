// Goal: Visit http://localhost:3000/users and see index.html show up in the browser

// Step 1: Configure Express and EJS

const express = require("express");
const app = express();

const request = require("request");

app.set("view engine", "ejs");

// Step 2: Create a route for /users

app.get("/users", (req, res) => {
  request({
    method: "GET",
    uri: "http://myapi-profstream.herokuapp.com/api/5c1770/persons"
  }, (err, response, body) => {
    // Step 3: Inside the route handler render the index.html template as an EJS template (you will have to change the extension and place in correct folder)
    res.render("index", {
      users: JSON.parse(body)
    });
  });
});

//Step 1: Set up a new route to /users/:id/edit

app.get("/users/:id/edit", (req, res) => {
  //Step 3 (Bonus): Make request to api /persons/:id
  request({
    method: "GET",
    uri: `http://myapi-profstream.herokuapp.com/api/5c1770/persons/${req.params.id}`
  }, (err, response, body) => {
    //Step 2: Render the edit.html file as an EJS template (change extension)
    res.render("edit", {
      user: JSON.parse(body)
    });
  });
});

app.listen(3000);
