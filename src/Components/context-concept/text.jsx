import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextTextComponent() {
    const {theme}=useContext(GlobalContext)
  return <h1 style={{fontSize:theme==='dark'?'30px':'60px',color:theme==='dark'?'blue':'green',backgroundColor:theme==='dark'?'yellow':'orange'}}> Gravitorix</h1>;
}
export default ContextTextComponent;
