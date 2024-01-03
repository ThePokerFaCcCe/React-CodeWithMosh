import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData{
    name: string,
    age: number,
}

const ReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  return (
    <>
      <form action="#" onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name",{required:true})}
            type="text"
            id="name"
            className="form-control"
          />
          {formState.errors.name && (
            <p className="text-danger">
              {formState.errors.name?.type?.toString()}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age",{required:true,min:5,max:100})}
            type="number"
            id="age"
            className="form-control"
          />
          {formState.errors.age && (
            <p className="text-danger">
              {formState.errors.age?.type?.toString()}
            </p>
          )}
        </div>
        <hr />
        {/* <p>{JSON.stringify(person)}</p> */}
        <hr />
        <input type="submit" className="btn btn-secondary" value="Submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
