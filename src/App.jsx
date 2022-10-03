import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import ListForm from "./components/ListForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
        <Route path="/listform" element={<ListForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
