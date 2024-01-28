
export const placeOrder = (order) => ({
    type: 'PLACE_ORDER',
    payload: order,
  });
  
  export const updateStage = (orderId, newStage) => ({
    type: 'UPDATE_STAGE',
    payload: { orderId, newStage },
  });
  
  export const cancelOrder = (orderId) => ({
    type: 'CANCEL_ORDER',
    payload: orderId,
  });
  