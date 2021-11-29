import {USERS_ERROR, LOGIN} from '../types'
import LoginService from "../../service/loginService";

export const login = (data) => async dispatch => {

    try{
        const res = await LoginService.login(data)
        dispatch( {
            type: LOGIN,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}