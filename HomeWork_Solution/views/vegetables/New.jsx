const React = require('react');
const Layout = require('./layouts/Layout')

function New(props){
    return(
        <Layout veg={props.Vegetable}>
            <h1>Add new vegetable</h1>
            <a href='/vegetables'>Go back to Index Page</a>
            <form action="/vegetables" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Expired?: <input type="checkbox" name="expired" /><br/>
                <input type="submit" value="Create vegetable" />
            </form>
        </Layout>
    )
}

module.exports = New