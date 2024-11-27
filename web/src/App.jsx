import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Curriculum from "./pages/Curriculum/Curriculum";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Createcv from "./pages/CreateCV/CreateCV";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/curriculum/:cvId" element={<Curriculum />} />
        </Routes>
      </AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/createcv" element={<Createcv />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
