import {legacy_createStore as createStore  , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension" 
import { RunPythonReducer } from './reducers/runPythonReducer'
import { loginReducer, logoutReducer, registerReducer } from './reducers/userReducer'

const reducer = combineReducers({
  runPython : RunPythonReducer,
  loginUser : loginReducer,
  logOut : logoutReducer,
  registerUser : registerReducer
})

let initialState = {}
const middleware =[thunk]

const store = createStore(reducer , initialState ,  composeWithDevTools(applyMiddleware(...middleware)))

export default store