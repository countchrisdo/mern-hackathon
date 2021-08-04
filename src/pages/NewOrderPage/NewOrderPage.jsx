import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setMenuItems(items);
    }
    getItems();
  }, []);  // an empty dependency array will run the effect after the first render only

  return (
    <>
    <h1>NewOrderPage</h1>
    <button onClick={setMenuItems}>Click to Render</button>
    </>
  );
}