const React = require('react');
const Layout = require('../layouts/Layout');

function Show({ vegetable }) {
    return (
        <Layout>
            <h2>{vegetable.name}</h2>
            <p>Color: {vegetable.color}</p>
            <p>{vegetable.readyToEat ? 'Ready to eat!' : 'Not ready to eat'}</p>

            <a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>
            <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST" className="delete-form">
                <input type="submit" value="Delete" />
            </form>
            <a href="/vegetables">Back to Index</a>
        </Layout>
    );
}

module.exports = Show;