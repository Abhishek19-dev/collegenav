import {legacy_createStore as createStore  , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension" 
import { RunPythonReducer } from './reducers/runPythonReducer'

const reducer = combineReducers({
  runPython : RunPythonReducer
})

let initialState = {}
const middleware =[thunk]

const store = createStore(reducer , initialState ,  composeWithDevTools(applyMiddleware(...middleware)))

export default store