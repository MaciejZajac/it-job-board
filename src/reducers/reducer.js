import { ConstantsEnum } from "../constants/Constants";

const initialState = {
  //
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ConstantsEnum.SET_USER_INFO:
      return Object.assign({}, state, {
        ...action.payload
      });
    case ConstantsEnum.CLEAR_USER_INFO:
      localStorage.removeItem("token");
      localStorage.removeItem("expiryDate");
      localStorage.removeItem("userId");
      return Object.assign({}, state, { isAuth: false, token: "", userId: "" });
    case ConstantsEnum.ADD_NEW_OFFER:
      return Object.assign({}, state, {});

    case ConstantsEnum.SET_ACTIVE_OFFER:
      return Object.assign({}, state, { activeOffer: action.payload });
    default:
      return state;
  }
};

export default reducer;
