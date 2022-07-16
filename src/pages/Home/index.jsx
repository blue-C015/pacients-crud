import { Card } from "../../components/Card";
import "./style.css";
import { useState, useEffect } from "react";
import { PacientesService } from "../../services/PacientesService";

export function Home() {
  const [pacientes, setPacientes] = useState([]);
  const [buscarClientesDeNovo, setBuscarClientesDeNovo] = useState(false);

  async function pegarClientes() {
    const pacientesAux = await PacientesService.pegarTodosOsPacientes();

    setPacientes(pacientesAux);
  }

  function handleFetchPacientes() {
    setBuscarClientesDeNovo(!buscarClientesDeNovo);
  }

  useEffect(() => {
    pegarClientes();
  }, [buscarClientesDeNovo]);

  return (
    <div className="home">
      <a href="/criar-paciente" rel="noreferrer">
        Criar Paciente
      </a>
      {pacientes.map((paciente, index) => {
        return (
          <Card
            key={index}
            paciente={paciente}
            handleFetchPacientes={handleFetchPacientes}
          />
        );
      })}
    </div>
  );
}
