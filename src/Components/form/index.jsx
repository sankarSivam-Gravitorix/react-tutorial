import { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleInputChange(e) {
    console.log(e);

    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="enter your name"
          onChange={handleInputChange}
        />
        <input
          value={email}
          name="email"
          id="email"
          placeholder="enter your email"
          onChange={handleEmailChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default FormComponent;
