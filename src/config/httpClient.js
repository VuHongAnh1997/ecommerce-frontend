import React from "react";
import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000
})

httpClient.interceptors.request.use(function (config) {

    const accessToken = localStorage.accessToken
    if(accessToken) {
        config.headers.Authorization =  accessToken;
    }
    return config;
});

export default httpClient