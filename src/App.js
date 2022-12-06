import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/routes";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Blog from "./pages/Blog";
import Comunidade from "./pages/Comunidade";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="blog" element={<Blog />} />
          <Route path="comunidade" element={<Comunidade />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
