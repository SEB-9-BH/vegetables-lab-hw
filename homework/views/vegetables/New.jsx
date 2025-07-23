const React = require("react");
const Layout = require("../layouts/Layout")

function New (props) {
    return (
        <Layout vegetable={props.vegetable}>
                    <h1>New Vegetable Page</h1>
                    <a href="/vegetables">Go back to the Index Page</a>
                    <form action="/vegetables" method="POST">
                    Name: <input type="text" name="name"></input>
                    <br />
                    Color: <input type="text" name="color"></input>
                    <br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat"></input>
                    <br />
                    <input type="submit" value="Create Vegetable"></input>
                    </form>
        </Layout>
    )
}

module.exports = New;