
import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orderHistory, setActiveOrder, activeOrder}) {
  const orders = orderHistory.map(order =>
    // <span onClick={() => setActiveOrder(order)} className={order === activeOrder ? 'OrderListItem selected' : ''}>
      <OrderListItem
      key={order._id}
      order={order}
      setActiveOrder={setActiveOrder}
      activeOrder={activeOrder}
      />
    // </span>

  )

  return (
    <main className="OrderList">
      
      {orders}

    </main>
  );
}