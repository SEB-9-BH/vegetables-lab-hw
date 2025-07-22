const React = require('react');
const Layout = require('../layouts/Layout');

function Index({ vegetables }) {
  return (
    <Layout title="All Vegetables">
      <a href="/vegetables/new">➕ Add New Vegetable</a>
      <ul>
        {vegetables.map((veg) => (
          <li key={veg._id}>
            <a href={`/vegetables/${veg._id}`}>{veg.name}</a> — {veg.color}
            {veg.readyToEat ? ' ✅' : ' ❌'}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Index;
