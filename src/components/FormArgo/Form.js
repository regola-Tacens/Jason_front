const Form = ({ argonaute, handleChange, handleSubmit }) => (
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

export default Form;
