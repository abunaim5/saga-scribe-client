import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:5000'

const getData = async (url) => {
    const result = await axios.get(BASE_URL + url).then(res => res.data);

    return result;
}

const useFetch = (key, url) => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: [key],
        queryFn: async () => await getData(url),
        refetchOnWindowFocus: false,
        enabled: !!key
    });

    return { isLoading, error, data, refetch }
};

export default useFetch;