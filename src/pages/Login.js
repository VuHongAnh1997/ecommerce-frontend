import React from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {login} from "../store/actions/usersAction";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import banner from '../assets/images/pages/login/banner.webp'
import '../assets/scss/pages/login.scss'

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        const formData = {
            username: values.username,
            password: values.password
        }
        if (dispatch(login(formData))) {
            navigate("/")
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng nhập email hoặc số điện thoại"),
            password: Yup.string().required("Vui lòng nhập mật khẩu")
        }),
        onSubmit: values => {
            handleSubmit(values).then()
        }
    })


    return (
        <div className="login">
            <img className="w-100" src={banner} alt="Banner"/>
            <form onSubmit={formik.handleSubmit} className="mt-5 text-center">
                <div className="mb-3">
                    <input id="username" className="mr-3" type="text" {...formik.getFieldProps('username')}
                           placeholder="Nhập email hoặc số điện thoại"/>
                    {
                        formik.touched.username && formik.errors.username ? (
                            <div className="text-danger mt-2">{formik.errors.username}</div>
                        ) : null
                    }
                </div>

                <div>
                    <input id="password" type="text" {...formik.getFieldProps('password')} placeholder="Mật khẩu"/>
                    {
                        formik.touched.password && formik.errors.password ? (
                            <div className="text-danger mt-2">{formik.errors.password}</div>
                        ) : null
                    }
                </div>

                <button className="login__btn mt-3" type="submit">Đăng nhập</button>

            </form>

            <div className="login__link d-flex flex-column align-content-center mt-5">
                <div className="text-center mb-1">Về trang chủ</div>
                <div className="text-center mb-1">Đăng ký</div>
                <div className="text-center">Quên mật khẩu ?</div>
            </div>
        </div>


    )
}

export default Login