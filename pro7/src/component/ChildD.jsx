import React, { Component } from 'react'

export default class ChildD extends Component {
  render() {
    return (
      <div>ChildD
        <h1>{this.props.person.pnm}---{this.props.person.age}---{this.props.person.gender}</h1>

      </div>
    )
  }
}
