import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from "redux-thunk";
import { logger } from '../utils/logger'
import { dataReducer } from '../../common/reducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { loadTableReducer } from "../../../redux-components/reducers/loadTableReducer";
import { userLoginReducer, userRegisterReducer } from "../../../redux-components/reducers/userReducer";

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const rootReducer = combineReducers({
  data: dataReducer,
  loadTable: loadTableReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer
})

const middleware = [thunk]

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, ...middleware)))