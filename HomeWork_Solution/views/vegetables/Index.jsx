const React = require('react');
const Layout = require('./layouts/Layout')

function Index(props){
    const veg = props.vegetables
    return(
        <Layout veg={props.Vegetable}>
            <h1>My Vegetables</h1>
            <a href="/vegetables/new">Create A new Vegetable Here</a>
            <ul>
                {
                    veg.map((vegetable)=>{
                    return (<li>This is the <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a> of the color {vegetable.color}</li>)
                    }
                )
                }
            </ul>
        </Layout>
    )
}

module.exports = Index