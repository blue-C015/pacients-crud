const baseUrl = "http://localhost:8000/pacientes";

const parseResponse = (response) => response.json();

export const PacientesService = {
  criarPaciente: (dadosPacienteNovo) =>
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosPacienteNovo),
    }).then(parseResponse),

  pegarTodosOsPacientes: () =>
    fetch(baseUrl, {
      method: "GET",
    }).then(parseResponse),

  deletarCliente: (id) =>
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).then(parseResponse),
};
