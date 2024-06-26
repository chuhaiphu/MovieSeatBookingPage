import * as ActionType from "../utils/constant"

export const actionRegister = (name, numberOfSeat) => {
  return {
    type: ActionType.REGISTER,
    payload: {
      name,
      numberOfSeat
    }
  }
}

export const actionSelectSeat = (seat) => {
  return {
    type: ActionType.SELECT_SEAT,
    payload: seat
  }
}


export const actionDeSelectSeat = (seat) => {
  return {
    type: ActionType.DESELECT_SEAT,
    payload: seat
  }
}

export const actionBookSeat = () => {
  return {
    type: ActionType.BOOK_SEAT
  }
}

export const actionCancelSeat = (seat) => {
  return {
    type: ActionType.CANCEL_SEAT,
    payload: seat
  }
}

export const actionPlaceOrder = () => {
  return {
    type: ActionType.PLACE_ORDER
  }
}