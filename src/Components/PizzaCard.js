
import React from 'react';

const calculateMakingTime = (size) => {
    if (size === 'Small') return 3;
    if (size === 'Medium') return 4;
    if (size === 'Large') return 5;
  };
  
const PizzaCard = ({ order, onStageUpdate, onCancelOrder }) => {
  const handleStageUpdate = (newStage) => {
    onStageUpdate(order.id, newStage);
  };

  const handleCancelOrder = () => {
    onCancelOrder(order.id);
  };

  return (
    <div className={`pizza-card ${order.timeSpent > calculateMakingTime(order.size) ? 'highlight-red' : ''}`}>
      
      <h3>Order {order.id}</h3>
      <p>Type: {order.type}</p>
      <p>Size: {order.size}</p>
      <p>Base: {order.base}</p>
      <p>Stage: {order.stage}</p>
      <p>Time Spent: {order.timeSpent} min</p>
      {order.stage === 'Order Placed' && (
        <>
          <button onClick={() => handleStageUpdate('Order in Making')}>Start Making</button>
          <button onClick={handleCancelOrder}>Cancel Order</button>
        </>
      )}
      {order.stage === 'Order in Making' && (
        <button onClick={() => handleStageUpdate('Order Ready')}>Order Ready</button>
      )}
      {order.stage === 'Order Ready' && (
        <button onClick={() => handleStageUpdate('Order Picked')}>Order Picked</button>
      )}
    </div>
  );
};

export default PizzaCard;
