
const initialState = {
  orders: [],
  totalDelivered: 0,
};
const MAX_ORDERS_LIMIT = 10;

const calculateMakingTime = (size) => {
  if (size === 'Small') return 3;
  if (size === 'Medium') return 4;
  if (size === 'Large') return 5;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      if (state.orders.length >= MAX_ORDERS_LIMIT) {
        alert('“Not taking any order for now. Try after 3 Minutes”');
        return state; // Do not modify state if orders limit is reached
      }

      const newOrder = {
        ...action.payload,
        stage: 'Order Placed',
        timeSpent: 0,
        id: state.orders.length + 1,
      };
      return { ...state, orders: [...state.orders, newOrder] };

    case 'UPDATE_STAGE':
      const updatedOrders = state.orders.map((order) =>
        order.id === action.payload.orderId
          ? { ...order, stage: action.payload.newStage }
          : order
      );
      return { ...state, orders: updatedOrders };

    case 'CANCEL_ORDER':
      const remainingOrders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      return { ...state, orders: remainingOrders };

    case 'UPDATE_TIME':
      const updatedTimeOrders = state.orders.map((order) => {
        const newTimeSpent = order.timeSpent + 1;
        return { ...order, timeSpent: newTimeSpent };
      });

      const sortedOrders = updatedTimeOrders.sort((a, b) => {
        const aDelay = calculateMakingTime(a.size) * 60 - a.timeSpent;
        const bDelay = calculateMakingTime(b.size) * 60 - b.timeSpent;
        return bDelay - aDelay;
      });

      const deliveredToday = sortedOrders.filter(
        (order) => order.stage === 'Order Picked'
      ).length;

      return { ...state, orders: sortedOrders, totalDelivered: deliveredToday };

    default:
      return state;
  }
};

export default rootReducer;
