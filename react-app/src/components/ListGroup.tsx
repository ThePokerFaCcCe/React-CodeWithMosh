import { useState } from "react";
import { v4 } from "uuid";
import Alert from "./Alert";


interface Props{
  items: string[];
  heading: string;
  onSelectItem:(item: string,index: number) => void;
}


export default function ListGroup({items,heading,onSelectItem}: Props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);


  const changeSelectedItemIndex = (index: number) =>
    setSelectedItemIndex(index);

  return (
    <>
      <Alert>
        <h1>{heading}</h1>
      </Alert>

      {items.length === 0 && <h1>List is empty</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItemIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={v4()}
            onClick={() => {
              changeSelectedItemIndex(index);
              onSelectItem && onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
