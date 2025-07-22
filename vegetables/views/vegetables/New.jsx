const React = require('react');
const Layout = require('../layouts/Layout');

function New() {
  return (
    <Layout title="Add New Vegetable">
      <form action="/vegetables" method="POST">
        <label>
          Name: <input type="text" name="name" required />
        </label><br />
        <label>
          Color: <input type="text" name="color" required />
        </label><br />
        <label>
          Ready to Eat:
          <input type="checkbox" name="readyToEat" />
        </label><br />
        <input type="submit" value="Create Vegetable" />
      </form>
      <br />
      <a href="/vegetables">⬅ Back to Vegetables</a>
    </Layout>
  );
}

module.exports = New;
