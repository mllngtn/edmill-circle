
export function usePost({
    url = null,
    callback = function doCallback() {

        console.log('error: usePost requires a callback function'); // eslint-disable-line no-console

    },
}) {

    /*
        then, do a fetch request to post our data, and
        get a response back.
        pass this response to our callback function
    */
    async function doPost() {

        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        callback(data);

    }

    doPost();

}
