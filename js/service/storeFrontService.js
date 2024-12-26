
async function getProduct(index) {
    return products[index];
}

async function getProducts() {
    return products;
}

async function fetchAllProducts() {
    try {
        const response = await fetch('http://localhost:50005/api/storeFront');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        //console.log(listProducts(data));
        return listProducts(data);

    } catch (error) {
        console.error('There was an error fetching the data:', error);
    }
}

function listProducts(data){
    const result = data.map(item => {
        const products = JSON.parse(item.jsonData).products;
    
        return {
            id: item.id,
            name: item.name,
            location: item.location,
            address: item.address,
            email: item.email,
            images: item.images,
            phone: item.phone,
            password: item.password,
            products: products
        };
    });
    return result;
}

export default { getProduct, getProducts, fetchAllProducts };