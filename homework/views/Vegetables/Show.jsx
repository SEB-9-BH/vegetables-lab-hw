const React = require('react')

function Show (props){
    const vegetable = props.vegetable
    return(<div>
        <h1>{vegetable.name} Page</h1>
                            <a href='/vegetables'>Go back to Index Page</a>

        <p>{vegetable.name} is the color {vegetable.color} {vegetable.readyToEat? 'and is ready to eat': 'and it\'s not ready to eat'}</p>
     <form action={`/vegetables/${props.vegetable._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.vegetable.name}`}/>
            </form>
            <div>
            <a href={`/vegetables/${props.vegetable._id}/edit`}><button>{`Edit this ${props.vegetable.name}`}</button></a>
            </div>
    </div>)
}

module.exports = Show

