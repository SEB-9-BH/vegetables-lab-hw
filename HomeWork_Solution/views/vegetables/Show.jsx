const React = require('react');
const Layout = require('./layouts/Layout')

function Show(props){
    return(
        <Layout veg={props.Vegetable}>
            <h1>{props.Vegetable.name}</h1>
            <a href='/vegetables'>Go back to Index Page</a>
            <p>
                The {props.Vegetable.name} is {props.Vegetable.color} and {props.Vegetable.expired? 'It is not ready to eat': 'It is ready to eat'}
            </p>
              <form action={`/vegetables/${props.Vegetable._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.Vegetable.name}`}/>
            </form>
            <div>
            <a href={`/vegetables/${props.Vegetable._id}/edit`}><button>{`Edit this ${props.Vegetable.name}`}</button></a>
            </div>
        </Layout>
    )
}

module.exports = Show