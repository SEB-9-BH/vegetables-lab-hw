const React = require('react');

function Layout({ children }) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/style.css" />
                <title>Vegetables App</title>
            </head>
            <body>
                <h1>Vegetable CRUD App</h1>
                {children}
            </body>
        </html>
    );
}

module.exports = Layout;