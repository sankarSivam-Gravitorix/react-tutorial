import React, { Component } from "react";

class Form extends Component {
  state = {
    //to fix the initial value
    name: "veera",
    age: 28,
  };
  handleNameChange = (e) => {
    //arrow function
    let newName = e.target.value; //create variable to target the input value
    this.setState({
      //to update the value
      name: newName,
    });
  };
  handleAgeChange = () => {
    // let newAge = e.target.value;
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  render() {
    return (
      //input tag gives a box, assign two props -value, onChange
      //button tag - assign onclick attribute
      //paragraph tag -assign name and age property
      <div>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <button onClick={this.handleAgeChange}>Increment Age</button>
        <p>
          Hello,{this.state.name} you are {this.state.age}
        </p>
      </div>
    );
  }
}
export default Form;

// import React from "react";
// import { useState } from "react";

// function Form(){
//     const [name, setName] = useState("");
//     const [age, setAge] = useState(25);

//     function handleNameChange(e){
//         setName(e.target.value)
//     }
//     function handleAgeChange(){
//         setAge(age+1)
//     }

//     return(
//         <div>
//             <input value={name} onChange={handleNameChange}/>
//             <button  onClick={handleAgeChange}>increment age</button>
//             <p>Hello,{name},you are {age} </p>
//         </div>
//     )
// }
// export default Form;
