const React= require("react")
const Vegetable = require("../../models/vegetable")
// const { disconnect } = require("mongoose")
const Layout=require("../layouts/Layout")



function Index (props){
    const vegetables= props.vegetables
    return(
        <Layout>
            <div>
                <h1>Vegetable Page</h1>
                <a href="/vegetables/new">make a new vegetable</a>

                <ul>
                    {
                        vegetables.map((vegetable)=>{
                            return(
                                <li>This is the <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> of the color {vegetable.color}</li>
                            )
                        })
                    }

                </ul>
            </div>
        </Layout>
    )
}

module.exports= Index