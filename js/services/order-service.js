import * as shippingService from "./shipping-service.js";

export function total(order) {
    const subTotal = order.basic * (1 - order.discount);
    const shipment = shippingService.shipment(order);
    return subTotal + shipment;
};