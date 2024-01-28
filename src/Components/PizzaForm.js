
import React, { useState } from 'react';

const PizzaForm = ({ onOrderPlacement }) => {
  const [pizzaType, setPizzaType] = useState('Veg');
  const [pizzaSize, setPizzaSize] = useState('Large');
  const [pizzaBase, setPizzaBase] = useState('Thin');

  const handleOrderSubmit = () => {
    const order = { type: pizzaType, size: pizzaSize, base: pizzaBase };
    onOrderPlacement(order);
  };

  return (
    <div>
      <h2>Pizza Order Form Here</h2>
      <label>
        Type:
        <select value={pizzaType} onChange={(e) => setPizzaType(e.target.value)}>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
      </label>
      <label>
        Size:
        <select value={pizzaSize} onChange={(e) => setPizzaSize(e.target.value)}>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </label>
      <label>
        Base: 
        <select value={pizzaBase} onChange={(e) => setPizzaBase(e.target.value)}>
          <option value="Thin">Thin</option>
          <option value="Thick">Thick</option>
        </select>
      </label>
      <button onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default PizzaForm;
