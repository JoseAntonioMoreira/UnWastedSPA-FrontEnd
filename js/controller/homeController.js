import homeView from '../view/homeView.js';
import shopService from '../service/ShopsService.js';

export function init() {
    homeView.render(shopService.getShop);
}
