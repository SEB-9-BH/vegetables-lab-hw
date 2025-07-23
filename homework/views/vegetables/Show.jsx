const React = require("react");
const Layout = require("../layouts/Layout")

function Show (props) {
    return (
        <Layout vegetable={props.vegetable}>
                <h1>{props.vegetable.name}</h1>
                <a href="/vegetables">Go back to the Index Page</a>
                <p>
                    The {props.vegetable.name} is {props.vegetable.color} and 
                    {props.vegetable.readyToEat? " It is ready to eat": " It is not ready to eat"}
                </p>
                <form action={`/vegetables/${props.vegetable._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete ${props.vegetable.name}`}></input>
                </form>
                <div>
                    <a href={`/vegetables/${props.vegetable._id}/edit`}>
                    <button>{`Edit ${props.vegetable.name}`}</button></a>
                </div>
        </Layout>
    )
}

module.exports = Show;