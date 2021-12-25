import React from "react";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:8080",
})


httpClient.interceptors.request.use(
    async config => {
        const token = localStorage.getItem("token")
        config.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        }
        return config;
    },
    error => {
        Promise.reject(error).then()
    });

export default httpClient