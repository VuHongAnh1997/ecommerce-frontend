import React from "react";
import httpClient from "../config/httpClient";
import axios from "axios";

class UserService {

    static login = (loginData) => {
        return axios.post("http://localhost:8080/api/user/login", loginData)
    }

    static getAllUser = () => {
        return httpClient.get("/api/user/all")
    }

    static getMenuPathByUser = (data) => {
        // debugger
        const params = {
            roleID: data
        }
        return httpClient.get("/api/menu/by-user/", {params})
    }

    static getUserDetails = () => {
        return httpClient.get("/api/user/current-user")
    }
}

export default UserService
