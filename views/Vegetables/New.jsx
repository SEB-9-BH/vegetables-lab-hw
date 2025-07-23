const React = require('react');
const Layout = require('../layouts/layouts');

function New() {
    return (
        <Layout>
            <form action="/Vegetables" method="POST">
                <label>
                    Name: <input type="text" name="name" placeholder="Enter vegetable name" title="Vegetable Name" />
                </label>
                <br />
                <label>
                    Color: <input type="text" name="color" placeholder="Enter vegetable color" title="Vegetable Color" />
                </label>
                <br />
                <label>
                    Ready to Eat: 
                    <input 
                        type="checkbox" 
                        name="readyToEat" 
                        title="Ready to Eat" 
                        placeholder="Check if ready to eat" 
                    />
                </label>
                <br />
                <input type="submit" value="Add Vegetable" />
            </form>
        </Layout>
    );
}

module.exports = New;