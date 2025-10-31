import React from "react";

export default function SubjectCard({ subject }) {
  return (
    <div className="subject-card">
      <img src={subject.image} alt={subject.subject} />
      <h4>{subject.subject}</h4>
    </div>
  );
}
