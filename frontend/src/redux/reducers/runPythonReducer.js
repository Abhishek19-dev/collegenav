import { RUN_PYTHON_CODE_FAIL, RUN_PYTHON_CODE_REQUEST, RUN_PYTHON_CODE_RESET, RUN_PYTHON_CODE_SUCCESS } from "../actionType"

export const RunPythonReducer = (state = {
    loading : false,
    success:false,
    data : "",
    isGetData :false
},action) =>{
    const {type , payload} = action
    switch(type)
    {
       case RUN_PYTHON_CODE_REQUEST:
        return{
            ...state,
            loading : true,
            isGetData: false
        }
        case RUN_PYTHON_CODE_SUCCESS:
            return{
                ...state,
                loading : false,
                success:true,
                data : payload.data.stdout,
                isGetData: true
                // data : payload.message
            }
            case RUN_PYTHON_CODE_FAIL:
                return{
                    ...state,
                    success:false,
                    error :payload,
                    isGetData: false
                }
            case RUN_PYTHON_CODE_RESET:
                return{
                    // ...state,
                    success:false,
                    loading:false,
                    data:"",
                    isGetData: false
                }    
                default:
                    return {...state}    
    }
}