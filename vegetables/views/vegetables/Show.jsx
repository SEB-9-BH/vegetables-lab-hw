const React = require('react')
const Layout = require('../Layout')

const styles = {
    backgroundColor: 'green',
    color: 'ghost white',
    display: 'flex',
    flexDirection: 'column'
}

const h1Styles = {
    backgroundColor: 'orange',
    color: 'ghost white',
    textAlign: 'center',
}

const btn = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px', // spacing between buttons
    marginTop: '20px',
    justifyContent: 'start',
    alignItems: 'center'
}

const btnStyles = {
    backgroundColor: 'yellow',
    color: 'black',
    textAlign: 'center',
    display: 'flex',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    cursor: 'pointer',
}


function Show(props){
    return(
        <div style={styles}>
            <h1 style={h1Styles}>{props.vegetable.name}</h1>
            <a href='/vegetables'>Go back to Index Page</a>
            <p>
                The {props.vegetable.name} is {props.vegetable.color} and  
                {props.vegetable.readyToEat? ' it is ready to eat': ' it is not ready to eat'}
            </p>
            <div style={btn}>
            <form action={`/vegetables/${props.vegetable._id}?_method=DELETE`} method="POST">
                <input type="submit" style={btnStyles} value={`Delete this ${props.vegetable.name}`}/>
            </form>
            <a href={`/vegetables/${props.vegetable._id}/edit`}><button style={btnStyles}>{`Edit this ${props.vegetable.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show