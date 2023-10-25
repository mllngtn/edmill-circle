import { cache } from './cache.js';

/*
    useFetch will fire its callback function twice:
        1) first, with cached data,
        2) then with new data;
*/
export function useFetch({
    url = null,
    queryName = null,
    callback = function doCallback() {

        console.log('error: useFetch requires a callback function');

    },
}) {

    /*
        first, check if we have a cached response to this query.
        if so, pass that response to our callback function
    */
    const cached = JSON.parse(cache.retrieve(queryName));

    if (cached) {

        callback(cached);

    }
    
    /*
        then, do a fetch request to grab the latest response.
        pass the latest response to our callback function,
        and cache the latest response.
    */
    async function doFetch() {

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        // if the new data is the same as the old, then do nothing
        if (JSON.stringify(data) === JSON.stringify(cached)) {

            return;

        }

        callback(data);

        /*
            Save our new results to the cache
        */
        cache.save(queryName, JSON.stringify(data));
    }

    doFetch();

}
