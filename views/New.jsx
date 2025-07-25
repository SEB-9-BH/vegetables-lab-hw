const React = require("react");

function New() {
  return (
    <html>
      <head></head>
      <body>
        <h1>New Vegetable</h1>
        <form action="/vegetable" method="POST">
          <label>Name: <input type="text" name="name" required /></label><br />
          <label>Quantity: <input type="number" name="quantity" required /></label><br />
          <label>Color: <input type="text" name="color" required /></label><br />
          <button type="submit">Create</button>
        </form>
      </body>
    </html>
  );
}

module.exports = New;
