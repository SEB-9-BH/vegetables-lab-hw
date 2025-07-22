const React = require('react')
const style = {
    backgroundColor : 'red',
    display: 'flex',
    color: 'ghostwhite',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
}
const h1Style= {
    backgroundColor : 'black',
    color: 'ghostwhite',
    textAlign: 'center'
}
function Show(props){
    return(
        <div style={style}>
            <h1 style={h1Style}>{props.vegatable.name}</h1>
            <a href='/vegatables'>Go back to Index Page</a>
            <p>
                The {props.vegatable.name} is {props.vegatable.color} and
                {props.vegatable.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
              <form action={`/vegatables/${props.vegatable._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.vegatable.name}`}/>
            </form>
            <div>
            <a href={`/vegatables/${props.vegatable._id}/edit`}><button>{`Edit this ${props.vegatable.name}`}</button></a>
            </div>
        </div>
    )
}
module.exports = Show