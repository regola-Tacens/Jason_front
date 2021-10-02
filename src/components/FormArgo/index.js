import { useState } from "react";
import { getArgonautes, createArgonautes } from "../../actions";

const FormArgo = () => {
  const [author, setUsername] = useState();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // const handleGetArgonautes = async () => {
  //   const argos = await getArgonautes();
  //   console.log(argos)
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // on vérifie que le champ n'est pas vide ou ne contient pas que des espaces
    if (!author || !author.trim()) {
      alert("le champ doit être rempli");
      return;
    }

    // on retire les espaces blancs au début et à la fin du nom, et on rejette les chiffres
    const authorRegEx = author
      .trimStart()
      .trimEnd()
      .match(/[a-zA-Z'éèàêöï]+/g)
      .join(" ");

    // on limite l'envoi du formulaire à 30 caractères
    if (authorRegEx.length >= 30) {
      alert("le nom ne doit pas être plus long que 30 caractères");
      return;
    }
    const authorName = authorRegEx.slice(1, 30);
    createArgonautes({ username: authorName });
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <form>
        <label>Nom de l&apos;Argonaute</label>
        <input onChange={handleChange} required />
        <button type="submit" onClick={handleSubmit}>
          send
        </button>
      </form>
      {/* <button onClick={handleGetArgonautes}>show result</button> */}
    </>
  );
};

export default FormArgo;
