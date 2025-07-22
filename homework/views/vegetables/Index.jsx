const React = require('react')
const Layout = require('../layouts/Layout')

function Index(props) {
    const vegetables = props.vegetables
    return (
        <Layout vegetable={props.vegetable}>
            <h1>Vegetable Index Page</h1>
            <ul>
                {vegetables.map((vegetable) => {
                    return (
                        <li>
                            This is the <a href = {`/vegetables/${vegetable.id}`}>{vegetable.name}</a> of the color {vegetable.color}
                        </li>
                    )
                }
                )}
            </ul>
            <a href='/vegetables/new'>Add more vegetables</a>
        </Layout>
    )
}

module.exports = Index