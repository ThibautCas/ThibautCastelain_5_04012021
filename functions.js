// Request to API 
const getProducts = async function () {
    const response = await fetch(url);
    return await response.json();
  }
