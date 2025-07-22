const React = require('react')

//New Page is to display after Create New data (CREATE--> POST Action)
function New(props) {
    return(
        <div>
            <h1>New Vegetable Page</h1>
            <a href ='/vegetables'>Go Back to Index Page</a>
            <form action='/vegetables' method='POST'>
            Name: <input type='text' name='name'/><br/>
            Color: <input type = 'text' name='color'/><br/>
            Vegetable Type: 
            <select name='type'>
                <option value = ''>Select a Type</option>
                <option value= 'root'>Root</option>
                <option value= 'leafy'>Leafy</option>
                <option value= 'fruit veg'>Fruit Vegetable</option>
                <option value= 'flower'>Flower</option>
                <option value= 'seed'>Seed</option>
                </select> <br/>
                <input type='submit' value= 'Create Vegetable'/>
            </form>
        </div>
    )
}

module.exports = New