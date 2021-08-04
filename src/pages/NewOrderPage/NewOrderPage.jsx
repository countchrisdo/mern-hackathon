import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
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