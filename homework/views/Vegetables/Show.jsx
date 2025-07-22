const React = require('react')

function Show (props){
    const vegetable = props.vegetable
    return(<div>
        <h1>{vegetable.name} Page</h1>
        <p>{vegetable.name} is the color {vegetable.color} {vegetable.readyToEat? 'and is ready to eat': 'and it\'s not ready to eat'}</p>
    </div>)
}

module.exports = Show

