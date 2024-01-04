import { useState, useEffect } from "react"

export function useFetch(url) {
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        let link = "http://ergast.com/api/f1/current/"

        const fetchData = async () => {
            try {
                console.log(`------------------------------fetchin---------------------------`)
                const response = await fetch(link + url, { signal });
                const data = await response.json();
                setFetchedData(data);
                // console.log(fetchedData)
                // console.log("Data ", JSON.stringify(data))
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Żądanie zostało anulowane.');
                } else {
                    console.error('Error fetching data:', error);
                }
            }

        };
        fetchData()


    }, []);
    return fetchedData
}