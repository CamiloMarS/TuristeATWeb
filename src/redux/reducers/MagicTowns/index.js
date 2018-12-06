import { makeAsyncActionCreator } from "redux-toolbelt";
import { fromJS } from "immutable";

export const magicTowns = makeAsyncActionCreator("MAGIC_TOWNS");
const initState = fromJS({
  loading: false,
  towns: null,
  error: ""
});

export default function magicTownsReducer(state = initState, action) {
  switch (action.payload) {
    case magicTowns.TYPE: {
      return state.set("loading", true);
    }
    case magicTowns.success.TYPE: {
      return state.merge({ loading: false, towns: action.payload });
    }
    case magicTowns.failure.TYPE: {
      return state.merge({ loading: false, error: action.payload });
    }
    default:
      return initState;
  }
}
