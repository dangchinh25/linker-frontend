import { createStore } from "redux"
import { onBoardingReducers } from "./reducers"

export const store = createStore(onBoardingReducers)
