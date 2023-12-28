import { useState } from "react";
import ListGroup from "./components/ListGroup";
import BSButton from "./components/BSButton";
import Alert from "./components/Alert";
import CssModuleButton from "./components/CssModuleButton/CssModuleButton";

const App = () => {
  const [items, setItems] = useState(["london", "paris", "irland"]);
  const [warning, setWarning] = useState("");

  return (
    <div className="container mt-5">
      <CssModuleButton/>
    </div>
  );
};

export default App;
