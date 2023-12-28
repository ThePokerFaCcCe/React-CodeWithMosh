import { useState } from "react";
import ListGroup from "./components/ListGroup";
import BSButton from "./components/BSButton";
import Alert from "./components/Alert";
import CssModuleButton from "./components/CssModuleButton/CssModuleButton";
import StyledComponetButton from "./components/StyledComponetButton";
import Like from "./Like";

const App = () => {
  return (
    <div className="m-5">
      <Like
        onLike={(e) => console.log("Liked")}
        onDislike={(e) => console.log("Disliked")}
      />
    </div>
  );
};

export default App;
