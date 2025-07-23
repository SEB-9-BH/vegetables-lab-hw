const React = require("react");

function Layout (props) {
    return (
        <html>
            <head>
                <title>{!props.vegetable || !props.vegetable.name ? "Hello From Vegetables": props.vegetable.name}</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Layout