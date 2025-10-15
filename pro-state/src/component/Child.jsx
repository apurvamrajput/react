//for state we have to createing
//  class base compoent 

import React, { Component } from 'react'

export default class Child extends Component {
    constructor(){
        super()
        this.state = {
            name:"wipro",
            location:"Mumbai"
        }
    }
    // change method 
    nmchange = ()=>{
            this.setState({name:"Irise",location:"pune"})
    }


  render() {
    return (
      <div>
        <h1>hello {this.state.name} and location {this.state.location}</h1>
        <br/>
        <button onClick={this.nmchange}>Click me</button>
      </div>
    )
  }
}
