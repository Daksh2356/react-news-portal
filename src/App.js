import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:name" element={<ArticlePage/>}/>
    </Routes>
  );
}

export default App;
