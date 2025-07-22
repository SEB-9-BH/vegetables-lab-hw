const React = require('react');

function Index(props) {
  const veg = props.vegetables;
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <title>Vegetables List</title>
      </head>
      <body>
        <h1 className="title">🥕 Vegetables List 🥕</h1>
        <ul className="veg-list">
          {veg.map((veg) => (
            <li key={veg._id}>
              This is the <a href={`/vegetables/${veg._id}`}>{veg.name}</a> of the color {veg.color} and it 
              {veg.readyToEat ? ' is ready to eat.' : ' is not ready to eat.'}
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
}

module.exports = Index;
