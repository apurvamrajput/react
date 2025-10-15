import React, { Component } from 'react'

//classbase componemt --> rcc

export default class NewState extends Component {
    constructor(){
        super()
        this.state = {
            name:"aaa",
            age:23
        }
    }
    
   
    update = ()=>{
        this.setState({name:"xyz",age:37})
    }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name} and my age is {this.state.age}</h1>
        <button onClick={this.update}>Click</button>
      </div>
    )
  }
}
