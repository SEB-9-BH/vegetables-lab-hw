const React = require('react');

function Edit(props) {
  const { name, _id, readyToEat, color } = props.vegetable;

  return (
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="form-container">
          <h1 className="form-title">{name} Edit Page</h1>
          <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
            <label>Name: <input type="text" name="name" defaultValue={name} /></label><br />
            <label>Color: <input type="text" name="color" defaultValue={color} /></label><br />
            <label>Ready to eat: 
              <input type="checkbox" name="readyToEat" defaultChecked={readyToEat} />
            </label><br />
            <input className="form-btn" type="submit" value="Update Vegetable" />
          </form>
        </div>
      </body>
    </html>
  );
}

module.exports = Edit;
