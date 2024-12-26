const shops = [
    {
        shopName: 'Loja do José',
        local: 'Porto',
        image: '/rsc/shop.avif',
    
    },
    {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        imdbRating: 9.2
    },
    {
        title: 'My Neighbour Totoro',
        year: 1988,
        director: 'Hayao Miyazaki',
        imdbRating: 8.2
    },
    {
        title: 'Back to the Future',
        year: 1985,
        director: 'Robert Zemeckis',
        imdbRating: 8.5
    },
    {
        title: 'The Room',
        year: 2003,
        director: 'Tommy Wiseau',
        imdbRating: 3.7
    },
    {
        title: 'Das Cabinet des Dr. Caligari',
        year: 1920,
        director: 'Robert Wiene',
        imdbRating: 8.1
    }
];

async function getShop(index) {
    return shops[index];
}

async function getShops() {
    return shops;
}
async function fetchShops() {
    try {
        const response = await fetch('http://localhost:50005/api/storeFront');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log(data); 
        return data;
    } catch (error) {
        console.error('There was an error fetching the data:', error);
    }
}
async function fetchShop(id) {
    const shops = await fetchShops();  // Get the list of all shops
    return shops.find(shop => shop.id === parseInt(id));  // Find shop by id
}
export default { getShop, getShops,fetchShops,fetchShop };
