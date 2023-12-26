import { useState } from "react";
import ListGroup from "./ListGroup";
import BSButton from "./BSButton";
import Alert from "./Alert";

const App = () => {
  const [items, setItems] = useState(["london", "paris", "irland"]);
  const [warning, setWarning] = useState("");

  return (
    <div>
      {warning && (
        <Alert type="danger" closeable onClose={(e) => setWarning("")}>
          {warning}
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="List"
        onSelectItem={(item, index) => {
          console.log(`${index}: ${item}`);
        }}
      />
      <BSButton
        onClick={(e) => {
          setItems([]);
          setWarning("List Cleared!");
        }}
        type="primary"
      >
        Clear
      </BSButton>
    </div>
  );
};

export default App;
