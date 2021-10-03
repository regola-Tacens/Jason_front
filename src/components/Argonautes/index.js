import Argonaute from './Argonaute';
import './styles.css'

const Argonautes = ({ argonautes }) => {
  
  return (
    <>
    <h2>Membres de l'équipage</h2>
    <div className="argonautesList">
      {argonautes.map((argonaute,index) => (
        <Argonaute key={argonaute.id} argonaute={argonaute} index={index}/>
      ))}
    </div>
    </>
  );
};

export default Argonautes;
