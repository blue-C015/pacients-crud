import { Input } from "../../components/Input";
import { useState } from "react";
import { PacientesService } from "../../services/PacientesService";
import { useNavigate } from "react-router-dom";

export function CreatePacient() {
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(evento) {
    evento.preventDefault();

    await PacientesService.criarPaciente({
      nome,
      status,
    });

    navigate("/");
  }

  return (
    <div>
      Create Pacient
      <form onSubmit={handleSubmit}>
        <Input
          name={"nome-paciente"}
          label={"Nome:"}
          setField={setNome}
          value={nome}
        />
        <Input
          name={"status-paciente"}
          label={"Status:"}
          value={status}
          setField={setStatus}
        />

        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
}
