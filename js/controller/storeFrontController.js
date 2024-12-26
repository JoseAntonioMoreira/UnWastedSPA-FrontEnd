import storeFrontService from "../service/storeFrontService.js";
import storeFrontView from "../view/storeFrontProductsView.js"

export async function init() {
   
    const prod =  await storeFrontService.fetchAllProducts();
    storeFrontView.render(prod);
}

