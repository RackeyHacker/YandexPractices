/**
 * Базовый интерфейс товара
 */
interface IBaseProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

/**
 * Товар, приходящий от API
 */
export interface IApiProduct extends IBaseProduct {}

/**
 * Товар внутри приложения (UI)
 */
export interface IProduct extends IBaseProduct {}

/**
 * Список товаров, возвращаемый с бэкенда
 */
export interface IApiProductList {
    total: number;
    items: IApiProduct[];
}

/**
 * Базовый интерфейс данных покупателя
 */
interface IBaseCustomerData {
    payment: string;
    email: string;
    phone: string;
    address: string;
}

/**
 * Данные покупателя, приходящие от API или используемые в UI
 */
export interface ICustomerData extends IBaseCustomerData {}

/**
 * Тело запроса для создания заказа
 */
export interface IApiOrderRequest extends ICustomerData {
    total: number;
    items: string[];
}

/**
 * Ответ от сервера при успешном создании заказа
 */
export interface IApiOrderResponse {
    id: string;
    total: number;
}

/**
 * Ошибка при создании заказа
 */
export interface IApiOrderError {
    error: string;
}

/**
 * Заказ внутри UI
 */
export interface IOrder {
    products: IProduct[];
    customerData: ICustomerData;
    total: number;
}

/**
 * Список заказов, если API поддерживает
 */
export interface IApiOrderList {
    total: number;
    items: IApiOrderResponse[];
}
