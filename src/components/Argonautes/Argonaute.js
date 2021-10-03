import "./styles.css";

const Argonaute = ({ argonaute, index }) => {
  return (
    <div className="argonaute">
      <div className="argonaute__index">Argonaute {index + 1}</div>
      <div className="argonaute__name">{argonaute.username}</div>       
    </div>
  );
};

export default Argonaute;
