import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from './../useAxios/useAxios';

const useAllDataLength = () => {
    const axiosGlobal = useAxios();
    const { data, isLoading } = useQuery({
        queryKey: ["load all data"],
        queryFn: async () => {
            const { data } = await axiosGlobal("/all-products");
            return data;
        }
    })
    if (isLoading) return;
    return data.length;
};

export default useAllDataLength;