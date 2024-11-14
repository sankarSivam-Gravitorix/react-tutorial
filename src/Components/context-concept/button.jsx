import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {
  const { setTheme, theme } = useContext(GlobalContext);
  console.log("Current theme:", theme);
  return (
    
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light",)}>
      change color
    </button>
  );
  
}

export default ContextButtonComponent;

