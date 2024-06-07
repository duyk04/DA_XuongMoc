
import { useState, useEffect } from 'react';
import axios from '../api/api_products'

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            let response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            setError(err);
            console.error("Error fetching data: ", err);
        }
    };

    useEffect(() => {
        getData();
    }, [url]);

    return { data, error };
};

export default useFetchData;
