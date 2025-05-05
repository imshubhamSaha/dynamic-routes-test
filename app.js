const express = require("express");
const app = express();
const port = 3000;

// Dynamic GET route with customized response
app.get("/welcome/:username", (req, res) => {
  // Extract username from route
  const username = req.params.username;
  // Extract role from query
  const role = req.query.role;

  // Capitalize first letter of username and role
  const format = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  if (username && role) {
    res.send(
      `👋 Welcome, ${format(username)}! You are logged in as an ${format(
        role
      )}.`
    );
  } else if (username) {
    res.send(`👋 Hello, ${format(username)}! We couldn't detect your role.`);
  } else {
    res.send("Hello! Please provide a username in the URL.");
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
