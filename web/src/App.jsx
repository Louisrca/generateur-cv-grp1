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
import UserCurriculum from "./pages/UserCurriculum/UserCurriculum";
import UserGestion from "./pages/UserGestion/UserGestion";

import UpdateUserCurriculum from "./pages/UpdateUserCurriculum/UpdateUserCurriculum";

import UserRecommendation from "./pages/UserRecommendation/UserRecommendation";


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

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserGestion />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/curriculum/:cvId" element={<Curriculum />} />
          <Route
            path="/profile/recommendation/:id"
            element={<UserRecommendation />}
          />
          <Route
            path="/my-cv"
            element={
              <ProtectedRoute>
                <UserCurriculum />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createcv"
            element={
              <ProtectedRoute>
                <Createcv />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-cv/:cvId"
            element={
              <ProtectedRoute>
                <UpdateUserCurriculum />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
