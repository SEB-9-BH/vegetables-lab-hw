const React = require('react')

function Index (props) {

    const vegatables = props.vegatables
    return (
        <div>
            <h1>Vegatables Index Page</h1>
            {/* <a href="/fruits/new">Create A new Fruit Here</a> */}
            <ul>
                {
                    vegatables.map((vegatable) => {
                        return (
                           <li >This is the <a href={`/vegatables/${vegatable.id}`}>{vegatable.name}</a> of the color {vegatable.color}
                         
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index