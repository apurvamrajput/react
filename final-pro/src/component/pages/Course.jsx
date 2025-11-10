import React from 'react'
import react from "../../assets/react.svg"
function Course() {
  return (
    <div>
        <div className='bg-dark text-light text-center p-2'>
        <h3> Our Popular Courses</h3>
        </div>
        <div className='row1 d-flex justify-content-evenly p-3 text-center'>
               <div className="card" style={{width: '18rem'}}>
            <img src="cards/c1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Java</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div> 

                <div className="card" style={{width: '18rem'}}>
                <img src="cards/c2.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Practical Digital Marketing & SEO</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                <img src="cards/c3.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Python</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>

         <div className='row2 d-flex justify-content-evenly'>
               <div className="card" style={{width: '18rem'}}>
            <img src="cards/c4.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">SpringBoot & React JS Training</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div> 

                <div className="card" style={{width: '18rem'}}>
                <img src="cards/c5.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">SAP</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>

                <div className="card" style={{width: '18rem'}}>
                    {/* using assets dir */}
                {/* <img src={react} className="card-img-top" alt="..."/> */}
                <img src="cards/c6.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Data Science</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Course