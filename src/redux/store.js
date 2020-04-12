import { createStore, combineReducers } from "redux"
import { onBoardingReducer } from "./reducers"

export const store = createStore(onBoardingReducer)
