import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './includes/Header.js'


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
      <Header />
    </div>
    )
  }
}

