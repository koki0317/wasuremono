import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
