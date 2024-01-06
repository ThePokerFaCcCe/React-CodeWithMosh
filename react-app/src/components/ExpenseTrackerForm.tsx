import React, { FormEvent, useRef } from "react";

const ExpenseTrackerForm = () => {
  const productNameRef = useRef(null);
  const amountRef = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Data Submitted");
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        {/* Input */}
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Product Name
          </label>
          <input
            ref={productNameRef}
            type="text"
            id="product-name"
            className="form-control"
          />
        </div>
        {/* Input */}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            ref={amountRef}
            type="text"
            id="amount"
            className="form-control"
          />
        </div>
        {/* Input */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            ref={amountRef}
            type="text"
            id="category"
            className="form-control"
          />
        </div>
      </form>
    </>
  );
};

export default ExpenseTrackerForm;
