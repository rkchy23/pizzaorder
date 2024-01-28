
import React from 'react';
import PizzaCard from './PizzaCard';

const PizzaList = ({ orders, onStageUpdate, onCancelOrder }) => {
  const stages = ['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'];

  const renderPizzaColumn = (stage) => {
    const filteredOrders = orders.filter((order) => order.stage === stage);

    return (
      <div key={stage} className="pizza-column">
        <h2>{stage}</h2>
        {filteredOrders.map((order) => (
          <PizzaCard
            key={order.id}
            order={order}
            onStageUpdate={onStageUpdate}
            onCancelOrder={onCancelOrder}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pizza-columns">
      {stages.map((stage) => renderPizzaColumn(stage))}
    </div>
  );
};

export default PizzaList;
