import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <MenuListItem
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
      key={item._id}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}