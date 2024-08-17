import React from 'react';
import axios from 'axios';

const useAxios = () => {
    const axiosGlobal = axios.create({
        baseURL:"https://evoucher-server.vercel.app",
    })
    return axiosGlobal;
};

export default useAxios;
