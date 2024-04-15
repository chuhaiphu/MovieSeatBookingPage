import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionRegister } from '../stores/action'


class BookInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      numberOfSeat: 0,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
    this.props.actionRegister(this.state.name, this.state.numberOfSeat)
  }

  render() {
    return (
      <div className="book-input">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="name" placeholder="Enter your name" onInput={this.handleInputChange} required />
          </div>
          <div>
            <input type="number" name="numberOfSeat" placeholder="Enter number of seats" onInput={this.handleInputChange} required />
          </div>
          <button type="submit">Pick Seat</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionRegister: (name, numberOfSeat) => {
      dispatch(actionRegister(name, numberOfSeat))
    }
  }
}

export default connect(null, mapDispatchToProps)(BookInput)