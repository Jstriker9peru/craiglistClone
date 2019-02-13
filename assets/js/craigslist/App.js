import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div>
      THIS IS THE APP PAGE
    </div>
    )
  }
}

