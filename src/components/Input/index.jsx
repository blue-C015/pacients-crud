import "./style.css";

export function Input({ setField, name, label, value }) {
  function handleChange(evento) {
    setField(evento.target.value);
  }

  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}
