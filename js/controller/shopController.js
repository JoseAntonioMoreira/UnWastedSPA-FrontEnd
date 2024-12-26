import shopsService from '../service/shopsService.js';
import shopsView from '../view/shopsView.js';

export async function init() {
    const shops = await shopsService.fetchShops();
    shopsView.render(shops);
}
