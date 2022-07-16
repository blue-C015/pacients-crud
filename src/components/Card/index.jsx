import { PacientesService } from "../../services/PacientesService";
import "./style.css";

export function Card({ paciente, handleFetchPacientes }) {
  async function handleClickDelete() {
    await PacientesService.deletarCliente(paciente.id);
    handleFetchPacientes();
  }

  return (
    <div className="container">
      <h1>{paciente.nome || "Titulo Padrão"}</h1>
      <span>{paciente.status || "Status Indeferido"}</span>
      <div className="action-container">
        <button className="btn btn-editar">Editar</button>
        <button className="btn btn-deletar" onClick={handleClickDelete}>
          Deletar
        </button>
      </div>
    </div>
  );
}
