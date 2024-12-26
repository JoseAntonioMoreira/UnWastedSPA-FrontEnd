import shopsService from '../service/ShopsService.js';  // Import the service for fetching shop data
import shopView from '../view/shopView.js';  // Import the view for rendering shop details

export async function init() {

    const shopId = window.location.pathname.split("/")[2]
    const shop = await shopsService.fetchShop(shopId);  // Get specific shop by ID
        shopView.render(shop); // Render the shop details
    
}
