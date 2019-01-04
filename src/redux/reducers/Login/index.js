import { makeAsyncActionCreator, makeActionCreator } from "redux-toolbelt";
import { fromJS } from "immutable";

export const userLogin = makeAsyncActionCreator("USER_LOGIN");
export const setNormalLogin = makeActionCreator("setLoginEmailPass");

const initialState = fromJS({
  logged: false,
  user: null,
  loading: false,
  error: ""
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case userLogin.TYPE: {
      return state.set("loading", true);
    }
    case userLogin.success.TYPE: {
      return state.merge({
        logged: true,
        user: action.payload,
        loading: false
      });
    }
    case userLogin.failure.TYPE: {
      return state.merge({
        loading: false,
        error: action.payload
      });
    }
    case setNormalLogin.TYPE: {
      return state.set("loading", true);
    }
    default:
      return initialState;
  }
}

export default loginReducer;
