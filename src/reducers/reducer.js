import { ConstantsEnum } from "../constants/Constants";

const reducer = (state = {}, action) => {
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

    // trzy przypadki: ZAWOŁANIE, SUKCES, PORAŻKA
    case "GET_JOBS_OFFERS":
      return { ...state, loading: true, getBooksErrors: null };
    case "GET_OFFERS_SUCCEEDED":
      return { ...state, loading: false, jobOffers: action.jobOffers };
    case "GET_OFFERS_FAILED":
      return {
        ...state,
        isGetBooksLoading: false,
        getBooksErrors: action.message
      };

      return;
    default:
      return state;
  }
};

export default reducer;
