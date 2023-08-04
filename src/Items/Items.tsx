import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";

export interface ItemType {
  id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating,
}

type Rating = {
  rate: number,
  count: number,
}

export default function Items(): JSX.Element {
  const [items, setItems] = useState<ItemType[]>([]);

  async function loadItems() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data: ItemType[] = await res.json();
    console.log('Items.loadItems().37:', data);
    setItems(data);
  }

  useEffect(() => {loadItems()}, []);  
  const { itemId } = useParams();
  console.log('Items itemsId.43:', itemId);

  return (
    <div>
      <ItemCard items={items} id={String(itemId)} />
    </div>
  );

}
