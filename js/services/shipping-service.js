export function shipment(order) {  
    return order.basic < 100.0 ? 20.0 : order.basic < 200.0 ? 12.0 : 0.0;
}