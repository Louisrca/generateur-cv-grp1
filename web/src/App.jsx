import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Curriculum from "./pages/Curriculum/Curriculum";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/curriculum/:cvId" element={<Curriculum />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
