const React = require('react')
const Layout = require('../Layout')

function Index (props){

    const vegetables = props.vegetables;
    return (
        <Layout vegetable={props.vegetables}>
            <h1>Index page</h1>
            <ul>
                {
                    vegetables.map((vegetable) => {
                        return <li key={vegetable._id}> This is the <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> of the color {vegetable.color}</li>
                    })
                }
            </ul>
        </Layout>
    )
}

module.exports = Index