const { model } = require('mongoose')
const React = require('react')
 

function Edit(props) {
const { name, _id, color, type } = props.Vegetable
    return (
        <div>
            <h1>{name} Edit Page</h1>
            <a href= '/vegetables'>Go Back to Index Page</a>
            <form action = {`/vegetables/${_id}?_method = 'PUT'`} method = 'POST'>
                Name: <input type = 'text' name = 'name' defaultValue={name} /><br/>
                Color: <input type= ' text' name = 'color' defaultValue={color}/><br/>
                Vegetable Type: <select name = 'type'>
                        <option value = ''>Select a Type</option>
                        <option value= 'root'>Root</option>
                        <option value= 'leafy'>Leafy</option>
                        <option value= 'fruit veg'>Fruit Vegetable</option>
                        <option value= 'flower'>Flower</option>
                        <option value= 'seed'>Seed</option>
                    </select> <br/>
                    <input type = 'submit' value = 'Update Vegetable'/>
            </form>
        </div>
    )

 } 


 
 module.exports = Edit


