const React = require('react');

function Show(props) {
    const veg = props.vegetable;

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <div className="show-container">
                    <h1>{veg.name}</h1>

                    <p>
                        <strong>Color:</strong> {veg.color}
                    </p>

                    <p>
                        <strong>Ready to Eat:</strong> {veg.readyToEat ? 'Yes 🥗' : 'No ❌'}
                    </p>

                    <div className="button-group">
                        <a href={`/vegetables/${veg._id}/edit`}>
                            <button className="edit-btn">Edit</button>
                        </a>

                        <form
                            action={`/vegetables/${veg._id}?_method=DELETE`}
                            method="POST"
                            style={{ display: 'inline' }}
                        >
                            <button className="delete-btn">Delete</button>
                        </form>
                    </div>

                    <br />
                    <a href="/vegetables">← Back to Vegetables List</a>
                </div>
            </body>
        </html>
    );
}

module.exports = Show;
