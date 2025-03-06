import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import CreatePost from "../src/pages/CreatePost";
import EditPost from "../src/pages/EditPost"

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
