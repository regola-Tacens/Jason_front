import { createArgonautes } from "../../actions";
import {
  checkIfArgonauteExists,
  sanitizeArgonauteInput,
} from "../../selectors";
import "./styles.css";

const FormArgo = ({ setArgonaute, argonaute, setTrigger, argonautes }) => {
  const handleChange = (event) => {
    setArgonaute(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // fonction qui va épurer la value de l'input
    const newArgonaute = sanitizeArgonauteInput(argonaute);

    // fonction qui vérifie si le nom existe déjà
    checkIfArgonauteExists(newArgonaute, argonautes);

    // on ajoute le nouvel argonaute à la base de donnée et on déclenche la mise à jour de l'équipage
    createArgonautes({ username: newArgonaute }, setTrigger);

    //on vide le formualire en remettant la valeur de l'argonaute actuel à zero
    setArgonaute("");
  };

  return (
    <div className="formArgo">
      <h2>Ajouter un(e) Argonaute</h2>
      <form>
        <label>Nom de l&apos;Argonaute</label>
        <input value={argonaute} onChange={handleChange} required />
        <button type="submit" onClick={handleSubmit}>
          send
        </button>
      </form>
    </div>
  );
};

export default FormArgo;
