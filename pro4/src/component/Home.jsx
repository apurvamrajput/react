//function base component 
 function Home(){
    let x = 100
    let nm = "react"

    let obj = {nm:"abc",age:23}
    return(
        <div>
            {/* inline css */}
            <h1 style={{color:'red'}}>This is my Home page</h1>
            <h2>{x}</h2>
            <h3>{nm}</h3>
            <h4>{obj.nm}---{obj.age}</h4>
        </div>
    )
 }

 export default Home;