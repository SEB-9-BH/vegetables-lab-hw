const React = require('react');
const Layout = require('./layouts/Layout')

function Edit(props){
    const { name, _id, expired, color } = props.Vegetable
    return(
         <Layout veg={props.Vegetable}>
            <h1>{name} Vegetable Edit Page</h1>
            <a href='/vegetables'>Go back to Index Page</a>
            <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Color: <input type="text" name="color" defaultValue={color}/><br/>
                Expired?: {expired? <input type="checkbox" name="expired" defaultChecked />: <input type='checkbox' name="expired"/>}<br/>
                <input type="submit" value="Update vegetable" />
            </form>
        </Layout>
    )
}

module.exports = Edit