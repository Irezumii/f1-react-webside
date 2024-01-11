import { useState, useEffect } from "react"

export function useFetch(url, setIsLoading=null) {
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if(url === null){
            controller.abort()
        }

        let link = "http://ergast.com/api/f1/"

        const fetchData = async () => {
            try {
                console.log(`------------------------------fetchin- ${url}--------------------------`)
                const response = await fetch(link + url, { signal });
                const data = await response.json();
                setFetchedData(data);
                // console.log(fetchedData)
                console.log("Data ", data)
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Żądanie zostało anulowane.');
                } else {
                    console.error('Error fetching data:', error);
                }
            } finally {
                if(setIsLoading !== null){
                    setIsLoading(false)
                }
            }

        };
        fetchData()


    }, [url]);
    return fetchedData
}