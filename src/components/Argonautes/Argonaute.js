import React from 'react';
import { deleteArgonaute } from "../../actions";
import PropTypes from 'prop-types';
import "./styles.css";

const Argonaute = ({ argonaute, index, setTrigger }) => {

  const handleDelete = (id) => {
    deleteArgonaute(id,setTrigger);
  }
  return (
    <div className="argonaute">
      <div className="argonaute__index">Argonaute {index + 1}</div>
      <div className="argonaute__name">{argonaute.username}</div>  
      <div className="argonaute__deleteBtn" onClick={()=>handleDelete(argonaute.id)}>X</div>   
    </div>
  );
};

Argonaute.propTypes = {
  argonaute: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setTrigger: PropTypes.func.isRequired,
}

export default Argonaute;
