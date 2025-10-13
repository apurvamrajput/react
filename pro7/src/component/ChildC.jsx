import React, { Component } from 'react'

export default class ChildC extends Component {
  render() {
    return (
      <div>ChildC
        <h1>{this.props.comp_nm}</h1>
      </div>
    )
  }
}
