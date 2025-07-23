const React = require("react");
const Layout = require("../layouts/Layout")

function Index (props) {
    const vegetables = props.vegetables;
    return (
        <Layout vegetable={props.vegetable}>
                <h1>Index Page</h1>
                <ul>
                    {
                        vegetables.map((vegetable) => {
                            return (<li>This is the <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> of the color {vegetable.color}</li>)
                        })
                    }
                </ul>
        </Layout>
    )
}

module.exports = Index;