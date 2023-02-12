import { useState, useEffect } from 'react'

const useAuthState = (url) => {
    const [loading, setLoading] = useState(true);
    const [auth, setSession] = useState({session: false, url: null});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url)
                setSession({
                    session: resp.status === 200 ? true : false,
                    url: location.hostname
                });
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {auth, loading, error}

};

export default useAuthState
