import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_RESET, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_RESET, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_LOGIN, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionType"

export const loginReducer = (state={
    loading:false,
    user:{},
    success:false,
    isActive:false,
    isLoggedIn:false
},action) =>{
    const {type,payload} = action

    switch(type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                user : payload,
                isActive : true,
                isLoggedIn:true,
                success : true,
            }
            case LOGIN_FAIL:
                return{
                    ...state,
                    isLoggedIn:false,
                    loading:false,
                    error:payload
                }
                case LOGIN_RESET:
                    return{
                        isLoggedIn : false,
                        isActive : false,
                        user : []
                    }
                default:
                    return {...state}
    }
}

// export const registerReducer = (state={
//     loading:false,
//     user:[],
//     success:false,
//     isRegistered : false
// },action) =>{
//     const {type,payload} = action

//     switch(type){
//         case REGISTER_REQUEST:
//             return{
//                 ...state,
//                 loading:true
//             }
//         case REGISTER_SUCCESS:
//             return{
//                 ...state,
//                 loading:false,
//                 success:true,
//                 user : payload,
//                 isRegistered:true
//             }
//             case REGISTER_FAIL:
//                 return{
//                     ...state,
//                     isRegistered:false,
//                     loading:false,
//                     error:payload
//                 }
//             case REGISTER_LOGIN : 
//               return{
//                 isRegistered : true,
//               }
//                 default:
//                     return {...state}
//     }
// }

export const logoutReducer = (state={
    loading:false,
    isLoggedOut:false,
    message : ""
},action) =>{
    const {type,payload} = action

    switch(type){
        case LOGOUT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case LOGOUT_SUCCESS:
            return{
               loading : false,
               isLoggedOut : true,
               message : payload
            }
            case LOGOUT_FAIL:
                return{
                    ...state,
                    isLoggedIn : false,
                    loading : false,
                    error:payload
                }
                case LOGOUT_RESET:
                    return{
                        ...state,
                        loading : false,
                        isLoggedOut : false,
                        message : ""
                    }
                default:
                    return {...state}
    }
}

export const registerReducer = (state={
    loading:false,
    user:[],
    success:false,
    isRegistered : false
},action) =>{
    const {type,payload} = action

    switch(type){
        case REGISTER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                user : payload,
                isRegistered:true
            }
            case REGISTER_FAIL:
                return{
                    ...state,
                    isRegistered:false,
                    loading:false,
                    error:payload
                }
            case REGISTER_LOGIN : 
              return{
                isRegistered : true,
              }
                default:
                    return {...state}
    }
}