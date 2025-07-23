const React = require('react');

function Layout(props) {
  const pageTitle = props.vegetable?.name || 'Hello from Vegetables';

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}

module.exports = Layout;
