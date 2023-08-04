import { ItemType } from "../Items/Items";

interface Props {
  items: ItemType[];
  id: string;
}

export default function ItemCard({ items, id }: Props): JSX.Element {
  const item = items.find(item=>String(item.id)===String(id));
  console.log('ItemCard items:', items, 'id:', id, 'item:', item);
  return item ? (
    <div>
      <h1>Item {item.id}</h1>
      <img style={{ width: '60px' }} src={item.image} alt="" />
      <ul>
        <li>Title:  {item.title}</li>
        <li>Price: {item.price} euro</li>
        <li>Category: {item.category}</li>
        <li>Rate: {item.rating.rate}</li>
      </ul>
      <div>Description: {item.description}</div>
    </div>
  ) : ( <div>Ошибка</div>);
}
