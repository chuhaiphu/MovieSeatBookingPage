import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCancelSeat } from '../stores/action'

class BookResult extends Component {
  renderBookingResult = () => {
    return (
      this.props.selectedSeatList.map((seat) => {
        return (
          <tr>
            <td>{seat.soGhe}</td>
            <td>{seat.gia} vnd</td>
            <td>
              <button onClick={() => this.props.actionCancelSeat(seat)}>X</button>
            </td>
          </tr>
        )
      })
    )
  }

  renderTotalPriceOfBookingResult = () => {
    if (this.props.selectedSeatList.length === 0) {
      return null
    }
    return (
      <tr className="total-price">
        <td>TỔNG</td>
        <td colSpan={2}>{this.props.selectedSeatList.reduce((total, seat) => { return total + seat.gia }, 0)}
          <span className="currency">vnd</span>
        </td>
      </tr>
    )
  }

  render() {
    return (
      this.props.selectedSeatList.length > 0 && (
        <>
          <div className="book-result-header">
            <h3 className="book-result-customer-name">
              <span className="greeting">Welcome,</span> {this.props.registerInfo.name}
            </h3>
          </div>
          <table className="book-result-table">
            <tbody>
              <tr>
                <th>Vị trí ghế</th>
                <th>Giá tiền (trên một ghế)</th>
                <th>Hủy ghế</th>
              </tr>
              {this.renderBookingResult()}
              {this.renderTotalPriceOfBookingResult()}
            </tbody>
          </table>

          <button className='place-order-button' onClick={this.props.onBookSeat}>PLACE ORDER</button>
        </>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    registerInfo: state.seatReducer.registerInfo,
    selectedSeatList: state.seatReducer.selectedSeatList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionCancelSeat: (seat) => {
      dispatch(actionCancelSeat(seat))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookResult)