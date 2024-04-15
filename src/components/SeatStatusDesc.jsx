import React, { Component } from 'react'

export default class SeatStatusDesc extends Component {
  render() {
    return (
      <ul className="showcase">
        <li>
          <div className="seat" />
          <small>Available</small>
        </li>
        <li>
          <div className="seat selected" />
          <small>Selecting</small>
        </li>
        <li>
          <div className="seat occupied" />
          <small>Occupied</small>
        </li>
      </ul>

    )
  }
}
