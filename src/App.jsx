import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Classbasedcomponent from "./Components/class_based_component";
import ContextButtonComponent from "./Components/context-concept/button";
import ContextTextComponent from "./Components/context-concept/text";
import FormComponent from "./Components/form";
import FunctionalComponent from "./Components/function_based_component";
import LoginComponent from "./Components/login";
import ProductList from "./Components/products";
import RegisterComponent from "./Components/register";
import UseeffectHook from "./Components/useeffect";
import Users from "./Components/users";
import UsestateHook from "./Components/usestate";
import Notes from "./Components/Routing/notes";
import User from "./Components/Routing/user";
import Home from "./Components/Routing/home";
import { useState } from "react";
import LoginForm from "./Components/usenavigate";
import NoteDetail from "./Components/useparams";

const dummyProduct = ["product 1", "product 2", "product 3"];

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "first note",
      info:'we will familiarize ourselves with the React-library, which we will be using to write the code that runs in the browser. We will also look at some features of JavaScript that are important for understanding React.'
    },
    {
      id: 2,
      content: "second note",
      info:'Instead of Vite you can also use the older generation tool create-react-app in the course to set up the applications. The most visible difference to Vite is the name of the application startup file, which is index.js.'
    },
    {
      id: 3,
      content: "third note",
      info:'I promise to keep the console open all the time during this course, and for the rest of my life when Iam doing web development.'
    },
  ]);
  return (
    <>
      {/* <h2>Hello React</h2>
      <Classbasedcomponent /> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList listOfProducts={dummyProduct} name='veera sankar' job='developer' country='india' district='tuticorin' city='kovilpatti' /> */}
      {/* <UsestateHook />
      <UseeffectHook /> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      {/* <FormComponent/> */}
      {/* <div style={{ display: "flex", gap: "20px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div> */}
      <Router>
        <div>
          <Link style={{ padding: "5px",color:'black' }} to="/">
            home
          </Link>
          <Link style={{ padding: "5px",color:'black'  }} to="/notes">
            notes
          </Link>
          <Link style={{ padding: "5px",color:'black'  }} to="/users">
            users
          </Link>
          <Link style={{ padding: "5px", color: "black" }} to="/login">
          Login
        </Link>
        </div>
        <Routes>
          
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/users" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Home/>} />
          <Route path="/notes/:id" element={<NoteDetail notes={notes}/> } />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
