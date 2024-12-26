import shopService from '../service/ShopsService.js';
import shopView from '../view/shopView.js';

export async function init() {
    const shop = await shopService.getShop();
    shopView.render(shop);
}