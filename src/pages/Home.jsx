import React from "react";
import objects from "../data/objects.json";
import subjects from "../data/subjects.json";
import ObjectCard from "../components/ObjectCard";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  return (
    <div className="home">
      <img
        className="banner"
        src="image/banner.png"
        alt="FPT Aptech Banner"
      />

      <h2>SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?</h2>
      <div className="object-grid">
        {objects.map((obj) => (
          <ObjectCard key={obj.id} item={obj} />
        ))}
      </div>

      <h2>WHAT IS THE COURSE PROGRAM?</h2>
      <div className="subject-grid">
        {subjects.map((sub) => (
          <SubjectCard key={sub.id} subject={sub} />
        ))}
      </div>

      <p className="desc">{subjects[0].description}</p>
    </div>
  );
}
