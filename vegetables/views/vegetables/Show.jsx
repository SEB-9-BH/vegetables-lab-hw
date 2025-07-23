const React = require('react');
const Layout = require('../layouts/Layout');

function Show({ vegetable }) {
  return (
    <Layout title={`View ${vegetable.name}`}>
      <p>
        <strong>Color:</strong> {vegetable.color}<br />
        <strong>Ready to Eat:</strong> {vegetable.readyToEat ? 'Yes ' : 'No'}
      </p>
      <a href={`/vegetables/${vegetable._id}/edit`}>✏️ Edit</a> <br /><br />
      <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
        <input type="submit" value="🗑️ Delete" />
      </form>
      <br />
      <a href="/vegetables">⬅ Back to Vegetables</a>
    </Layout>
  );
}

module.exports = Show;
