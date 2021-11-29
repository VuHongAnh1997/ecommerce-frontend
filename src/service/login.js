import React from "react";
import axios from "axios";

class LoginService {

    static login = async (loginData) => {
        const res = await axios.post("http://localhost:8080/api/user/login", loginData);
        return res;
    }
}

export default LoginService
