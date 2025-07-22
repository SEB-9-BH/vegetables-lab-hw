const React = require('react');


const styles ={
    backgroundColor: 'red',
    display: 'flex',
    color: 'ghostwhite',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}


const h1Styles ={
    backgroundColor: 'black',
    color: 'ghostwhite',
    textAlign: 'center'
}



function Show(props) {
    return (
        <div style={styles}>
            <h1 style= {h1Styles}>{props.vegetable.name}</h1>
            <a href='/vegetables'>Go back to Index Page</a>


            <p>
                The {props.vegetable.name} is {props.vegetable.color} and 
                {props.vegetable.readyToEat ? ' It is ready to eat' : ' It is not ready to eat'}
            </p>
            <form action={`/vegetables/${props.vegetable._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.vegetable.name}`} />
            </form>
            <div>
                <a href={`/vegetables/${props.vegetable._id}/edit`}>
                    <button>{`Edit this ${props.vegetable.name}`}</button>
                </a>
            </div>
        </div>
    );
}

module.exports = Show;