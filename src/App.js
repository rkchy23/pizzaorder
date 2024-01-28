
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


import PizzaForm from './Components/PizzaForm';
import PizzaList from './Components/PizzaList';



import { placeOrder, updateStage, cancelOrder } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const totalDelivered = useSelector((state) => state.totalDelivered);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'UPDATE_TIME' });
    }, 60000); // Update time every 1 minute

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
    {/* <Navbar/> */}
    <div className="App">
      
      <div className="pizza-form">
        <PizzaForm onOrderPlacement={(order) => dispatch(placeOrder(order))} />
      </div>
      <div className="pizza-list">
        <PizzaList
          orders={orders}
          onStageUpdate={(orderId, newStage) => dispatch(updateStage(orderId, newStage))}
          onCancelOrder={(orderId) => dispatch(cancelOrder(orderId))}
        />
        <div className="main-display">
          <div>Total Pizza Delivered Today: {totalDelivered}</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
