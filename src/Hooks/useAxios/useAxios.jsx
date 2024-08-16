import React from 'react';
import axios from 'axios';

const useAxios = () => {
    const axiosGlobal = axios.create({
        baseURL:"http://localhost:7000",
    })
    return axiosGlobal;
};

export default useAxios;
