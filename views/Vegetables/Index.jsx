const React = require('react');
const Layout = require('../layouts/layouts');

function Index({ vegetables }) {
    return (
        <Layout>
            <a href="/Vegetables/new">Add New Vegetable</a>
            <ul>
                {vegetables.map((veg) => (
                    <li key={veg._id}>
                        <a href={`/Vegetables/${veg._id}`}>{veg.name}</a>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

module.exports = Index;