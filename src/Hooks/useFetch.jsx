import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'https://saga-scribe-server.vercel.app'

const getData = async (url) => {
    const result = await axios.get(BASE_URL + url).then(res => res.data);

    return result;
}

const useFetch = (key, url) => {
    const { isLoading, error, data, refetch, isSuccess } = useQuery({
        queryKey: [key],
        queryFn: async () => await getData(url),
        refetchOnWindowFocus: false,
        enabled: !!key
    });

    return { isLoading, error, data, refetch, isSuccess }
};

export default useFetch;