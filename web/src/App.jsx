import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Createcv from "./pages/CreateCV/CreateCV";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/createcv" element={<Createcv />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
