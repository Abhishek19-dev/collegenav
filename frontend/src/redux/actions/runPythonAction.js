import axios from 'axios'
import { RUN_PYTHON_CODE_FAIL, RUN_PYTHON_CODE_REQUEST, RUN_PYTHON_CODE_SUCCESS } from '../actionType'

export const RunPythonAction = async(dispatch)=>{
    console.log("inside dispatch")
   try {
    dispatch({
        type : RUN_PYTHON_CODE_REQUEST
    })
    const {data} = await axios.get("/api/v1/run")
    console.log(data)
    dispatch({
        type : RUN_PYTHON_CODE_SUCCESS,
        payload : data
    })
   } catch (error) {
    dispatch({
        type : RUN_PYTHON_CODE_FAIL,
        payload : error.response.data.message
    })
   }
}