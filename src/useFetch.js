import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [failedLoading, setFailedLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        setFailedLoading(false);
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(error);
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError("things aren't working properly at the moment :<")
                setFailedLoading(true);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading, failedLoading, error };
}
 
export default useFetch;