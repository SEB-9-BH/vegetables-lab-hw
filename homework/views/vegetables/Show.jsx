const React = require('react')

function Show(props) {
const Vegetable = props.Vegetable
return(
<div>
    <h1>{props.Vegetable.name}</h1>
    <a href= '/vegetables'>Go Back to Index Page</a>
    <p>
        This is a {props.Vegetable.name} with a color of {props.Vegetable.color} and a type of {props.Vegetable.type}
    </p>
    <form action = {`/vegetables/${props.Vegetable._id}?_method=DELETE`} method='POST'>
        <input type = 'submit' value= 'Delete Vegetable'/>
    </form>
    <a href = {`/vegetables/${props.Vegetable._id}/edit`}><button type='button'>{`Edit this ${props.Vegetable.name}`}</button></a>
    </div>
)
}


module.exports = Show