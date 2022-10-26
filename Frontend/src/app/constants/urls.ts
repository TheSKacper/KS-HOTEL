const BASE_URL = 'http://localhost:5000'


export const OFFER_URL = BASE_URL + '/api/offers'
export const OFFER_TAGS_URL = OFFER_URL + '/tags'
export const OFFER_SEARCH_URL = OFFER_URL + '/search/'
export const OFFER_By_TAG_URL = OFFER_URL + '/tag/'
export const OFFER_By_ID_URL = OFFER_URL + '/'
export const USER_LOGIN_URL = BASE_URL + '/api/users/login'
export const USER_REGISTER_URL = BASE_URL + '/api/users/register'


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';


export const MENU_URL = BASE_URL + '/api/menu'
export const MENU_TAGS_URL = MENU_URL + '/tagr'
export const MENU_TAG_By_TAGS = MENU_URL + '/tag/' 