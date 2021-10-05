import { createArgonaute } from "../../actions";
import PropTypes from 'prop-types';
import {
  checkIfArgonauteExists,
  sanitizeArgonauteInput,
} from "../../selectors";
import Form from "./Form";
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

    // on interdit d'enregsitrer plus de 50 argonautes dans le bateau
    if (argonautes.length >= 50) {
      alert("le bateau est plein!");
      setArgonaute("");
      return;
    }

    // Si la longeur du tableau argonautes est de 48 on crée deux user, Jason et moi !
    if (argonautes.length === 48) {
      createArgonaute(
        { username: "Jason, beau, vaillant et courageux" },
        setTrigger
      );
      createArgonaute({ username: "Julien : chanceux !" }, setTrigger);
      setArgonaute("");
      return;
    }
    // on ajoute le nouvel argonaute à la base de donnée et on déclenche la mise à jour de l'équipage
    createArgonaute({ username: newArgonaute }, setTrigger);

    //on vide le formulaire en remettant la valeur de l'argonaute actuel à zero
    setArgonaute("");
  };

  return (
    <Form
      handleChange={handleChange}
      argonaute={argonaute}
      handleSubmit={handleSubmit}
    />
  );
};

FormArgo.propTypes = {
  setArgonaute: PropTypes.func.isRequired,
  argonaute: PropTypes.string,
  setTrigger: PropTypes.func.isRequired,
  

}

export default FormArgo;
