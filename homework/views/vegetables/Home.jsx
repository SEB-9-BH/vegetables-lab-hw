const React = require('react');

function Home() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="home-container">
          <h1>🥦 Welcome to the Vegetables App 🥦</h1>
          <a href="/vegetables">
            <button className="view-btn">View Vegetables</button>
          </a>
        </div>
      </body>
    </html>
  );
}

module.exports = Home;
