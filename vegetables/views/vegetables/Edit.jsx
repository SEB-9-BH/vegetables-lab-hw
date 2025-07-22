const React = require('react');
const Layout = require('../layouts/Layout');

function Edit({ vegetable }) {
  return (
    <Layout title={`Edit ${vegetable.name}`}>
      <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
        <label>
          Name:
          <input type="text" name="name" defaultValue={vegetable.name} required />
        </label><br />
        <label>
          Color:
          <input type="text" name="color" defaultValue={vegetable.color} required />
        </label><br />
        <label>
          Ready to Eat:
          <input
            type="checkbox"
            name="readyToEat"
            defaultChecked={vegetable.readyToEat}
          />
        </label><br />
        <input type="submit" value="Update Vegetable" />
      </form>
      <br />
      <a href={`/vegetables/${vegetable._id}`}>⬅ Back to Vegetable</a>
    </Layout>
  );
}

module.exports = Edit;
