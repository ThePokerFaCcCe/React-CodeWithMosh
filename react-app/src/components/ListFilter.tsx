import React, { useState } from "react";

const ListFilter = () => {
  const [items, setItems] = useState(["Sib", "Aloo", "Albaloo", "Havij"]);
  const [filterText, setFilterText] = useState("");

  var showItems = items;

  if (filterText) {
    showItems = items.filter(
      (item) => item.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Filter..."
        className="form-control"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <hr />
      <ul>
        {showItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListFilter;
