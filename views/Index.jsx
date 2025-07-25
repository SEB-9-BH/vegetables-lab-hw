const React = require("react");

function Index({ vegetables }) {
  return (
    <html>
      <head>
        <link href="/Index.css" rel="stylesheet" />
      </head>
      <body>
        <h1>Vegetables Index</h1>
        <a href="/vegetable/new">Add New Vegetable</a>
        <ul>
          {vegetables.map((veg) => (
            <li key={veg._id}>
              <a href={`/vegetable/${veg._id}`}>{veg.name}</a>
              {" | "}
              <a href={`/vegetable/${veg._id}/edit`}>Edit</a>
              {" | "}
              <form
                action={`/vegetable/${veg._id}?_method=DELETE`}
                method="POST"
                style={{ display: "inline" }}
              >
                <button type="submit">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
}

module.exports = Index;
