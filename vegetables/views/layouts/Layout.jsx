const React = require('react');

function Layout({ title, children }) {
  return (
    <html>
      <head>
        <title>{title || 'Vegetables App'}</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>{title || 'Vegetables App'}</h1>
        <hr />
        <div>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
