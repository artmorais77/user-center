import { Navigate, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export function App() {
  return (
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/details/:id" element={<Details />} />

        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
  );
}
