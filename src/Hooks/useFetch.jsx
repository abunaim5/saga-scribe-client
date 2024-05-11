import axios from 'axios';
import useQuery from '@tanstack/react-query';

const BASE_URL = 'http://localhost:5000'

const getData = async(url) => {
    const result = await axios.get(BASE_URL`${url}`).then(res => res.data);

    return result;
}

const useFetch = async (key, url) => {
    const {isLoading, error, data} = useQuery({
        queryKey: [key],
        queryFn: async () => await getData(url)
    });

    return {isLoading, error, data}
};

export default useFetch;