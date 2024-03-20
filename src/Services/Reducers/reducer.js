/* eslint-disable default-case */
import { Add_To_Cart } from '../constants';
const initialState = {
  cardData: [],
};

const cardItems = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return {
        ...state,
        cardData: action.data,
      };
      default:
        return state
  }
};

export default cardItems;