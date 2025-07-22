const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
        </head>
        <body>
            {props.children}
        </body>
    </html>
 )
}

module.exports = Layout