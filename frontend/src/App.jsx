import { useEffect, useState, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Instance from "./axiosConfig";
import Landing from "./components/pages/Landing/Landing";
import HomePage from "./components/pages/HomePage/HomePage";
import AskQuestion from "./components/pages/AskQuestion/AskQuestion";
import AnswerPage from "./components/pages/AnswerPage/AnswerPage";
import ProtectedRoute from "./components/protectedRoute/ProtecedRoute";

export const AppState = createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/Ask" element={<AskQuestion />} />
        <Route path="/questions/:questionid" element={<AnswerPage />} />
      </Route>
    </Routes>
  );
}

export default App;