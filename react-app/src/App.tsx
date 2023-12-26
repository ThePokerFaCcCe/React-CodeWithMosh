import { useState } from "react";
import ListGroup from "./ListGroup";
import BSButton from "./BSButton";

const App = () => {
  const [items, setItems] = useState(["london", "paris", "irland"]);

  return (
    <div>
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={(item, index) => {
          console.log(`${index}: ${item}`);
        }}
      />
      <BSButton onClick={(e) => setItems([])} type="primary">
        Clear
      </BSButton>
    </div>
  );
};

export default App;
