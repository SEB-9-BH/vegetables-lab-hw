import Vegtebale from '../../models/vegetable'

const React = require('react')


function Index(props) {
    const vegetables = props.vegetables
    return(
        <div>
            <h1>Index Page</h1>
            <ul>
                {
                    vegetables.map(Vegtebale => {
                        return(<li>This is the <a href= {`/vegetables/${Vegtebale.id}`}>{Vegtebale.name}</a> of color {Vegtebale.color} and type of {Vegtebale.type}</li>)
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index