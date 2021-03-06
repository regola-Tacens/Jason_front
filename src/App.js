import "./App.css";
import { useEffect, useState } from "react";
import Argonautes from "./components/Argonautes";
import FormArgo from "./components/FormArgo/index.js";
import Header from "./components/Header";
import { getArgonautes } from "./actions";
import Footer from "./components/Footer";

function App() {
  const [argonautes, setArgonautes] = useState([]);
  const [argonaute, setArgonaute] = useState();
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const argonauteList = async () => {
      const argos = await getArgonautes();
      setArgonautes(argos);
      setIsLoading(false);
      setTrigger(false);
    };
    argonauteList();
  }, [trigger]);

  return (
    <div className="App">
      <Header />
      <FormArgo
        argonaute={argonaute}
        setTrigger={setTrigger}
        setArgonaute={setArgonaute}
        setArgonautes={setArgonautes}
        argonautes={argonautes}
        isLoading={isLoading}
      />
      <Argonautes argonautes={argonautes} setTrigger={setTrigger} />
      <Footer />
    </div>
  );
}

export default App;
