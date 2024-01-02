import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const StateForm = () => {
  const defaultPerson = {
    name: "",
    age: 0,
  };
  const [person, setPerson] = useState(defaultPerson);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Data Submitted");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPerson = {
      ...person,
      name: e.target.value,
    };
    setPerson(newPerson);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPerson = {
      ...person,
      age: parseInt(e.target.value),
    };
    setPerson(newPerson);
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
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="form-control"
            value={person.age}
            onChange={handleAgeChange}
          />
        </div>
        <hr />
        <p>{JSON.stringify(person)}</p>
        <hr />
        <input type="submit" className="btn btn-secondary" value="Submit" />
      </form>
    </>
  );
};

export default StateForm;
