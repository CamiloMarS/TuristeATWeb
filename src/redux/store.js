import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from "./reducers/index"; //reducers
//import * as sagas from '../sagas/index'; //Sagas

//create store
const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools()
);

//Poner en marcha las sagas

export default store;

export const globalStore = {
  loginReducer: {
    loggued: false,
    load: false,
    userId: ""
  },
  currentUserReducer: {
    userFullName: "",
    email: "",
    active: false,
    accessExpire: new Date(),
    tokenGoogle: ""
  },
  magicTowsReducer: {
    error: "",
    fetching: false,
    listTowns: [{}],
    message: ""
  }
};

/**
 * obtenerCordenadas
 * pueblos magicos
 * hoteles
 * restaurantes
 * atracciones
 * Mitos y Leyendas, ?
 */
