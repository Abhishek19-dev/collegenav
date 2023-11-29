import axios from 'axios'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_RESET, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_RESET, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_LOGIN, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actionType'

export const loginUser = (email,password) =>async(dispatch)=>{
    try {
     dispatch({
         type: LOGIN_REQUEST
      })
      const config = {headers:{"Content-type":"application/json"}}
      const {data} = await axios.post("/api/v1/login",{email,password},config)
      dispatch({
          type : LOGIN_SUCCESS,
          payload : data.user
      })
    //   dispatch({
    //     type : REGISTER_LOGIN
    //   })
    } catch (error) {
        dispatch({
         type : LOGIN_FAIL,
         payload:error.response.message.data
        })
    }
 }

 export const logoutUser = () =>async(dispatch)=>{
    try {
     dispatch({
         type: LOGOUT_REQUEST
      })
      
      const {data} = await axios.get("/api/v1/user/logout")
      dispatch({
          type : LOGOUT_SUCCESS,
          payload : data.message
      })
    //   dispatch({
    //     type:LOGIN_RESET
    //   })
    } catch (error) {
        dispatch({
         type : LOGOUT_FAIL,
         payload:error.response.message.data
        })
    }
 }

 export const registerUser = (formData) =>async(dispatch)=>{
    try {
     dispatch({
         type: REGISTER_REQUEST
      })
      const config = {headers:{"Content-type":"multipart/form-data"}}
      const {data} = await axios.post("/api/v1/register",formData,config)
 
      dispatch({
          type : REGISTER_SUCCESS,
          payload : data.user
      })
    } catch (error) {
        dispatch({
         type : REGISTER_FAIL,
         payload:error.response.message.data
        })
    }
 }