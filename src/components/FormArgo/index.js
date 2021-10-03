import { useState } from "react";
import { createArgonautes } from "../../actions";
import { sanitizeArgonauteInput } from "../../selectors";
import './styles.css';

const FormArgo = () => {
  const [argonaute, setArgonaute] = useState();

  const handleChange = (event) => {
    setArgonaute(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // fonction qui va épurer la value de l'input
    const newArgonaute =  sanitizeArgonauteInput(argonaute);
    createArgonautes({ username: newArgonaute });
  };

  return (
    <div className="formArgo">
      <h2>Ajouter un(e) Argonaute</h2>
      <form>
        <label>Nom de l&apos;Argonaute</label>
        <input onChange={handleChange} required />
        <button type="submit" onClick={handleSubmit}>
          send
        </button>
      </form>
    </div>
  );
};

export default FormArgo;
