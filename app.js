async function fetchApi() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

fetchApi();