const React=require('react')
function Index(props) {
    const vegetables=props.vegetables
    return(
        <div>
            <h1>The Vegetables Index Page</h1>
            <ul>
                {
                    vegetables.map((vegetable)=>{
                        return(<li>This is the <a href={`/vegetables/${vegetable.id}`}> {vegetable.name} </a>of the color {vegetable.color}</li>)
                    })
                }
            </ul>
        </div>
    )
}

module.exports=Index