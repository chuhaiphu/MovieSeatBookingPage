import data from "../assets/danhSachGhe.json"
import * as ActionType from "../utils/constant"

const initialState = {
  seatList: data,
  registerInfo: {
    name: "",
    numberOfSeat: 0,
  },
  selectingSeatList: [],
  selectedSeatList: []
}

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REGISTER:
      handleRegister(state, action)
      return { ...state }
    case ActionType.SELECT_SEAT:
      handleSelectSeat(state, action)
      return { ...state }
    case ActionType.DESELECT_SEAT:
      handleDeselectSeat(state, action)
      return { ...state }
    case ActionType.BOOK_SEAT:
      handleBooking(state, action)
      return { ...state }
    case ActionType.CANCEL_SEAT:
      handleCancel(state, action)
      return { ...state }
    case ActionType.RESET:
      handleReset(state, action)
      return { ...state }
    case ActionType.PLACE_ORDER:
      handlePlaceOrder(state, action)
      return { ...state }
    default:
      return { ...state }
  }
}

const handleSelectSeat = (state, action) => {
  const newSelectingSeat = { ...action.payload }
  state.selectingSeatList = [...state.selectingSeatList, newSelectingSeat]
}

const handleDeselectSeat = (state, action) => {
  const newSelectingSeat = { ...action.payload }
  const newSelectingSeatList = state.selectingSeatList.filter(
    (seat) => seat.soGhe !== newSelectingSeat.soGhe
  )
  state.selectingSeatList = newSelectingSeatList
}

const handleBooking = (state, action) => {
  //const newSeatList = [...state.seatList]
  // state.selectingSeatList.forEach((seat) => {
  //   newSeatList.forEach((seatRow) => {
  //     seatRow.danhSachGhe.forEach((seatInRow) => {
  //       if (seatInRow.soGhe === seat.soGhe) {
  //         seatInRow.daDat = true
  //       }
  //     })
  //   })
  // })
  if (Number(state.registerInfo.numberOfSeat) < (state.selectingSeatList.length + state.selectedSeatList.length)) {
    alert("Số ghế bạn đặt vượt quá số ghế bạn đã đăng ký")
    return;
  }
  const newSeatList = state.seatList.map((seatRow) => {
    const newDanhSachGhe = seatRow.danhSachGhe.map((seatInRow) => {
      if (state.selectingSeatList.find((seat) => seat.soGhe === seatInRow.soGhe)) {
        return { ...seatInRow, daDat: true };
      }
      return seatInRow;
    });
    return { ...seatRow, danhSachGhe: newDanhSachGhe };
  });
  state.selectedSeatList = [...state.selectedSeatList, ...state.selectingSeatList]
  state.selectingSeatList = []
  state.seatList = newSeatList
}

const handleRegister = (state, action) => {
  const newRegisterInfo = { ...action.payload }
  state.registerInfo = newRegisterInfo
}

const handleReset = (state) => {
  const newRegisterInfo = { ...initialState.registerInfo }
  state.registerInfo = newRegisterInfo
}

const handleCancel = (state, action) => {
  const newSelectedSeatList = state.selectedSeatList.filter((seat) => seat.soGhe !== action.payload.soGhe)
  state.selectedSeatList = newSelectedSeatList
  const newSeatList = state.seatList.map((seatRow) => {
    const newDanhSachGhe = seatRow.danhSachGhe.map((seatInRow) => {
      if (action.payload.soGhe === seatInRow.soGhe) {
        return { ...seatInRow, daDat: false };
      }
      return seatInRow;
    });
    return { ...seatRow, danhSachGhe: newDanhSachGhe };
  });
  state.seatList = newSeatList
}

const handlePlaceOrder = (state, action) => {
  if (Number(state.registerInfo.numberOfSeat) !== state.selectedSeatList.length) {
    alert("Vui lòng đặt đủ số ghế mà bạn đăng ký");
    return;
  }
  alert("Đặt ghế thành công");
  window.location.reload();
};


export default seatReducer