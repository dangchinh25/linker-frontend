import { createStore, combineReducers } from "redux"
import { onBoardingReducer, authReducer } from "./reducers"

const rootReducer = combineReducers({ onBoardingReducer, authReducer })

export const store = createStore(rootReducer)
