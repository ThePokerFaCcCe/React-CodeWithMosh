import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const SimpleUserStateForm = () => {
  const defaultPerson = {
    name: "",
    age: 0,
  };
  const [person, setPerson] = useState(defaultPerson);

  const [nameErrorMessage, setNameErrorMessage] = useState("");

  var isFormValid = true;
  if (nameErrorMessage) {
    isFormValid = false;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Data Submitted");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPerson = {
      ...person,
      name: e.target.value,
    };
    setPerson(newPerson);

    if (e.target.value.length < 3) {
      setNameErrorMessage("String must contain at least 3 character(s)");
    } else {
      setNameErrorMessage("");
    }
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={person.name}
            onChange={handleNameChange}
          />
        </div>
        {nameErrorMessage && <p className="text-danger">{nameErrorMessage}</p>}
        <hr />
        <input disabled={!isFormValid} type="submit" className="btn btn-success" value="Submit"/>
      </form>
    </>
  );
};

export default SimpleUserStateForm;
