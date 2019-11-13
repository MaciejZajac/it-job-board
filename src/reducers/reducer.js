import { ConstantsEnum } from "../constants/Constants";

const initialState = {
  //
};

const reducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case ConstantsEnum.SET_USER_TOKEN:
      return Object.assign({}, state, { token: action.token });
    default:
      return state;
  }
};

export default reducer;
