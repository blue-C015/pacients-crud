import { Home } from "./pages/Home";
import { CreatePacient } from "./pages/CreatePacient";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>CRUD de Pacientes</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-paciente" element={<CreatePacient />} />
      </Routes>
    </div>
  );
}

export default App;
