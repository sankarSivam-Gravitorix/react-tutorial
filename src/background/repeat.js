import React from "react";

const RepeatProperty = () => {
  return (
    <div>
      <h2>background-repeat</h2>
      <div
        style={{
          width: "800px",
          height: "500px",
          backgroundImage:
            'url("https://tse2.mm.bing.net/th?id=OIP.jaLZM_wVQbHLE4wqPtD_RwHaE7&pid=Api&P=0&h=180")',
          backgroundRepeat: "no-repeat", // Options: 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
          backgroundSize: "300px 300px", // Optional: adjust size of background image
          border: "1px solid #ddd",
          marginLeft: "20px",
        }}
      ></div>
    </div>
  );
};
export default RepeatProperty;

// background-repeat:
// repeat | repeat-x | repeat-y | no-repeat
