import PropTypes from 'prop-types';

const Form = ({ argonaute='', handleChange, handleSubmit }) => (
  <div className="formArgo">
    <h2>Ajouter un(e) Argonaute</h2>
    <form className="argonaute__form">
      <label className="argonaute__form__label">Nom de l&apos;Argonaute</label>
      <input className="argonaute__form__input" value={argonaute} onChange={handleChange} required />
      <button className="argonaute__form__submitBtn" type="submit" onClick={handleSubmit}>
        +
      </button>
    </form>
  </div>
);

Form.propTypes = {
  argonaute: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  argonautes: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
}

export default Form;
