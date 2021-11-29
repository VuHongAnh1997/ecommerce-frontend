import React, {useState} from "react";
import LoginService from "../service/loginService";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from "../store/actions/usersActions";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const onChangeUserName = (e) => {
        setFormData({...formData, username: e.target.value})
    }

    const onChangePassword = (e) => {
        setFormData({...formData, password: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }

   return (
        <div className="login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" placeholder="Nhập số điện thọai"
                           value={formData.username} onChange={(e) => onChangeUserName(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"
                           value={formData.password} onChange={(e) => onChangePassword(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login