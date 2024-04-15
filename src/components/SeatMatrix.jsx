import React, { Component } from 'react'
import Seat from './Seat'
import { connect } from 'react-redux'

class SeatMatrix extends Component {

  generateSeatMatrix = () => {
    const { registerInfo } = this.props;
    const isDisabled = registerInfo.name === '';
    return this.props.seatList.map((seatRow) => (
      <div key={seatRow.hang} className="row">
        {seatRow.danhSachGhe.map((seat, seatIndex)=> (
          <Seat key={seatIndex} isDisabled={isDisabled} seat={seat}/>
        ))}
      </div>
    ))
  }

  render() {
    return (
      <div className='row-container'>
        {this.generateSeatMatrix()}
      </div>
    )
  }

}

const mapStateToProp = (state) => {
  return {
    seatList: state.seatReducer.seatList,
    registerInfo: state.seatReducer.registerInfo,
    selectedSeat: state.seatReducer.selectedSeat
  }
}

export default connect(mapStateToProp, null)(SeatMatrix)
