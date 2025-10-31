import React from "react";

export default function ObjectCard({ item }) {
  return (
    <div className="object-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}
