import React from "react";
import { useState } from "react";

function UseState() {
  const [profile, setProfile] = useState({
    name: "veera",
    location: "kovilpatti",
    job: "developer",
  });

  const updateName = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: "sankar",
    }));
  };

  return (
    <div>
      <h1>BIO-DATA:</h1>
      <p>
        <b>name:</b>
        {profile.name}
      </p>
      <p>
        <b>location:</b>
        {profile.location}
      </p>
      <p>
        <b>job:</b>
        {profile.job}
      </p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default UseState;
