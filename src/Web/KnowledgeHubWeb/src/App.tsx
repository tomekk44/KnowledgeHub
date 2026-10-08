import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Main from "./pages/Main";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

