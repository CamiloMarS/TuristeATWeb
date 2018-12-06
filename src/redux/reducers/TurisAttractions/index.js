import { makeAsyncActionCreator } from "redux-toolbelt";
import { fromJS } from "immutable";
export const turistAttractions = makeAsyncActionCreator("turistAtractions");

const initState = fromJS({
  loading: false,
  attractions: null,
  error: null
});

export default function turistAttractionsReducer(state = initState, action) {
  switch (action.payload) {
    case turistAttractions.TYPE: {
      return state.set("loading", true);
    }
    case turistAttractions.success.TYPE: {
      return state.merge({
        loading: false,
        attractions: action.payload
      });
    }
    case turistAttractions.failure.TYPE: {
      return state.merge({ loading: false, error: action.payload });
    }
    default:
      return state;
  }
}
