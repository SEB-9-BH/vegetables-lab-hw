const React = require('react');

function New() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="form-container">
          <h1 className="form-title">New Vegetable</h1>
          <form action="/vegetables" method="POST">
            <label>Name: <input type="text" name="name" /></label><br />
            <label>Color: <input type="text" name="color" /></label><br />
            <label>Ready to eat: <input type="checkbox" name="readyToEat" /></label><br />
            <input className="form-btn" type="submit" value="Add Vegetable" />
          </form>
        </div>
      </body>
    </html>
  );
}

module.exports = New;
