const React = require("react");

function Edit({ vegetable }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Edit {vegetable.name}</h1>
        <form
          action={`/vegetable/${vegetable._id}?_method=PUT`}
          method="POST"
        >
          <label>Name: <input type="text" name="name" defaultValue={vegetable.name} required /></label><br />
          <label>Quantity: <input type="number" name="quantity" defaultValue={vegetable.quantity} required /></label><br />
          <label>Color: <input type="text" name="color" defaultValue={vegetable.color} required /></label><br />
          <button type="submit">Update</button>
        </form>
        <br />
        <a href={`/vegetable/${vegetable._id}`}>Cancel</a>
      </body>
    </html>
  );
}

module.exports = Edit;
