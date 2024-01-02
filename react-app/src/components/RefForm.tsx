import React, { FormEvent, useRef, useState } from "react";

const RefForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    var text = "";

    if (nameRef.current?.value && ageRef.current?.value) {
      text = `Hello ${nameRef.current.value}, your age is ${ageRef.current.value}`;
    }

    setMessage(text);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            ref={ageRef}
            type="number"
            name="age"
            id="age"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Say Hello
        </button>
        {message && <h3>{message}</h3>}
      </form>
    </>
  );
};

export default RefForm;
