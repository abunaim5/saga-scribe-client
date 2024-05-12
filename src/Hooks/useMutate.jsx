import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const mainUrl = 'http://localhost:5000'

const useMutate = (url, method) => {
    const options = {
        url: mainUrl + url,
        method
    };

    const {isLoading, error, isSuccess, mutate} = useMutation({
        mutationFn: (data) => {
            return axios({...options, data});
        }
    })

    return {isLoading, error, isSuccess, mutate}
};

export default useMutate;