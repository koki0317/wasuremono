import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
