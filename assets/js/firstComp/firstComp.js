import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
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
      THIS IS THE HOME PAGE
    </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
