import React from "react";
import httpClient from "../config/httpClient";

class LoginService {

    static login = async (loginData) => {
        return await httpClient.post("/api/user/login", loginData)
    }
}

export default LoginService
