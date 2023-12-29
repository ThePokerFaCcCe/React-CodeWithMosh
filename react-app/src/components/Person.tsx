import React, { useState } from "react";
import { produce } from "immer";

const Person = () => {
  const defaultPerson = {
    name: "John",
    family: "Doe",
    type: "Person",
  };

  const [person, setPerson] = useState(defaultPerson);

  const handleUpdate = () => {
    
    const newPerson = produce(person, (draft) => {
      draft.name = "Mat";
      draft.family = "Kh";
    });

    setPerson(newPerson);
    
  };

  return (
    <>
      <div>
        <p>Name: {person.name}</p>
        <p>Family: {person.family}</p>
        <p>Type: {person.type}</p>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </>
  );
};

export default Person;
