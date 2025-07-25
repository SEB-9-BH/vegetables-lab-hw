const React = require("react");

function Show({ vegetable }) {
  return (
    <html>
      <head></head>
      <body>
        <h1>{vegetable.name}</h1>
        <p>Quantity: {vegetable.quantity}</p>
        <p>Color: {vegetable.color}</p>
        <a href={`/vegetable/${vegetable._id}/edit`}>Edit</a><br />
        <form
          action={`/vegetable/${vegetable._id}?_method=DELETE`}
          method="POST"
        >
          <button type="submit">Delete</button>
        </form>
        <br />
        <a href="/vegetable">Back to Index</a>
      </body>
    </html>
  );
}

module.exports = Show;
