import Argonaute from "./Argonaute";
import "./styles.css";

const Argonautes = ({ argonautes, setTrigger }) => {
  return (
    <>
      <h2>
        <span className="argonaute__index">{argonautes.length}</span> Membres
        d'équipage
        {argonautes.length === 50 && <span> , le bateau est plein !</span>}
      </h2>

      <div className="argonautesList">
        {argonautes.map((argonaute, index) => (
          <Argonaute
            key={argonaute.id}
            argonaute={argonaute}
            index={index}
            setTrigger={setTrigger}
          />
        ))}
      </div>
    </>
  );
};

export default Argonautes;
