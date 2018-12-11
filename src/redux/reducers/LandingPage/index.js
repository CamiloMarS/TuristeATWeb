import { makeActionCreator } from "redux-toolbelt";
import { fromJS } from "immutable";

export const navigateToPage = makeActionCreator("NAVIGATE_TO_PAGE");
const initState = fromJS({ currentPage: "TUR-INO" });

function landingPageReducer(state = initState, action) {
  switch (action.type) {
    case navigateToPage.TYPE: {
      return state.merge({ currentPage: action.payload });
    }
    default:
      return state;
  }
}

export default landingPageReducer;
