import { useState } from "react";
import ListGroup from "./components/ListGroup";
import BSButton from "./components/BSButton";
import Alert from "./components/Alert";
import CssModuleButton from "./components/CssModuleButton/CssModuleButton";
import StyledComponetButton from "./components/StyledComponetButton";
import Like from "./Like";
import Person from "./components/Person";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  return (
    <div className="container">
      <ExpandableText maxLength={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis
        labore unde consequuntur non, repudiandae reprehenderit cum tenetur quam
        maxime repellat accusamus sint magnam ab dolorum magni. Doloremque in
        magnam iste dicta architecto est expedita sed repellat quisquam eaque!
        Itaque corrupti aperiam dolores doloribus mollitia, architecto
        voluptatibus praesentium a illum.
      </ExpandableText>
    </div>
  );
};

export default App;
