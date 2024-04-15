import React, { Component } from 'react'
import SeatMatrix from './SeatMatrix'
import SeatStatusDesc from './SeatStatusDesc'
import BookResult from './BookResult'
import BookInput from './BookInput'
import { connect } from 'react-redux'
import { actionBookSeat } from '../stores/action'

import moviescreen from "../assets/screen-thumb.png"
class Main extends Component {

  handleConfirmBooking = () => {
    this.props.actionBookSeat()
  }

  render() {
    return (
      <>
        <div className="book-detail">
          <BookInput />
          <div className='container'>
            <div className="movie-screen">
              <img src={moviescreen} alt="screen" />
            </div>
            <SeatMatrix ref={this.seatMatrixRef}/>
            <SeatStatusDesc />
            <button className='confirm-booking-button' onClick={this.handleConfirmBooking}>View Order</button>
          </div>
        </div>
        <div className="book-result">
          <BookResult />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    registerInfo: state.seatReducer.registerInfo,
    selectingSeat: state.seatReducer.selectingSeat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actionBookSeat: () => {
      dispatch(actionBookSeat())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Main)