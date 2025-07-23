const React = require('react');
const Layout = require('../layouts/Layout');

function Index({ vegetables }) {
    return (
        <Layout>
            <a href="/vegetables/new">Add New Vegetable</a>
            <ul>
                {vegetables.map((veg) => (
                    <li key={veg._id}>
                        <a href={`/vegetables/${veg._id}`}>{veg.name}</a>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

module.exports = Index;