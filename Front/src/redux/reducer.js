import { CLEAN_DETAIL, GET_CHARACTER_DETAIL } from "./actions";

const initialState = {
  characterDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
