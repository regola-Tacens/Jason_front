import "./App.css";
import { useEffect, useState } from "react";
import Argonautes from "./components/Argonautes";
import FormArgo from "./components/FormArgo/index.js";
import Header from "./components/Header";
import { getArgonautes } from "./actions";

function App() {
  const [argonautes, setArgonautes] = useState([]);

  useEffect(() => {
    const argonauteList = async () => {
      const argos = await getArgonautes();
      setArgonautes(argos);
    };
    argonauteList();
  }, [argonautes]);

  return (
    <div className="App">
      <Header />
      <FormArgo />
      <Argonautes />
      {JSON.stringify(argonautes)}
    </div>
  );
}

export default App;
