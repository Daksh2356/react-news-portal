import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Favorite from "./pages/Favorite";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:name" element={<ArticlePage/>}/>
      <Route path="/favorites" element={<Favorite/>}/>
    </Routes>
  );
}

export default App;
