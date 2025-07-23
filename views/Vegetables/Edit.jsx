const React = require('react');
const Layout = require('../layouts/Layout');

function Edit({ vegetable }) {
    return (
        <Layout>
            <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
                <label>
                    Name: <input
                        type="text"
                        name="name"
                        defaultValue={vegetable.name}
                        title="Enter the vegetable name"
                        placeholder="Vegetable name"
                    />
                </label>
                <br />
                <label>
                    Color: <input
                        type="text"
                        name="color"
                        defaultValue={vegetable.color}
                        title="Enter the vegetable color"
                        placeholder="Vegetable color"
                    />
                </label>
                <br />
                <label>
                    Ready to Eat:
                    <input
                        type="checkbox"
                        name="readyToEat"
                        defaultChecked={vegetable.readyToEat}
                        title="Check if the vegetable is ready to eat"
                        placeholder="Ready to eat"
                    />
                </label>
                <br />
                <input type="submit" value="Update Vegetable" />
            </form>
        </Layout>
    );
}

module.exports = Edit;