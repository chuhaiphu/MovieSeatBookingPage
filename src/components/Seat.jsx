import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionSelectSeat, actionDeSelectSeat } from '../stores/action'

class Seat extends Component {

  seatRef = React.createRef();
  handleSeatClick = () => {
    const seatElement = this.seatRef.current;
    if (
      seatElement &&
      seatElement.classList.contains('seat') &&
      !seatElement.classList.contains('occupied')
    ) {
      seatElement.classList.toggle('selected');
    }
    // ? Chuyển trạng thái của seat
    if (seatElement && seatElement.classList.contains('selected')) {
      this.props.actionSelectSeat(this.props.seat);
    } else {
      this.props.actionDeSelectSeat(this.props.seat);
    }
  };


  render() {
    const { seat, isDisabled } = this.props;
    const seatClass = `seat ${seat.daDat ? 'occupied' : ''} ${isDisabled ? 'disabled' : ''}`;

    return (
      <div
        ref={this.seatRef}
        onClick={this.handleSeatClick}
        className={seatClass}
      >
        <span>{seat.soGhe}</span>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionSelectSeat: (seat) => {
      dispatch(actionSelectSeat(seat))
    },
    actionDeSelectSeat: (seat) => {
      dispatch(actionDeSelectSeat(seat))
    }
  }
}


export default connect(null, mapDispatchToProps) (Seat)