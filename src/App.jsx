import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import Lists from "./pages/Lists";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/practice" element={<TopButton />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
