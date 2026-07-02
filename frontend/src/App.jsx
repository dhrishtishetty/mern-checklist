import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx"; 

const App = () => {
  return (
    <div className="relative h-full w-full" data-theme="pastel">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/task/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;