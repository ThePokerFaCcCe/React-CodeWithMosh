import { useState } from "react";
import ListGroup from "./components/ListGroup";
import BSButton from "./components/BSButton";
import Alert from "./components/Alert";
import CssModuleButton from "./components/CssModuleButton/CssModuleButton";
import StyledComponetButton from "./components/StyledComponetButton";
import Like from "./Like";
import Person from "./components/Person";
import ExpandableText from "./components/ExpandableText";
import RefForm from "./components/RefForm";

const App = () => {
  return (
    <div className="container">
      <RefForm/>
    </div>
  );
};

export default App;
