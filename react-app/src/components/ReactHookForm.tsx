import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({invalid_type_error:"Input is invalid"}).min(10),
});

// interface FormData{name:string,age:number}
type FormData = z.infer<typeof schema>;

const ReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form action="#" onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="form-control"
          />
          {formState.errors.name && (
            <p className="text-danger">{formState.errors.name?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age",{valueAsNumber:true  })}
            type="number"
            id="age"
            className="form-control"
          />
          {formState.errors.age && (
            <p className="text-danger">{formState.errors.age?.message}</p>
          )}{" "}
        </div>
        <hr />
        {/* <p>{JSON.stringify(person)}</p> */}
        <hr />
        <input disabled={!formState.isValid} type="submit" className="btn btn-secondary" value="Submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
