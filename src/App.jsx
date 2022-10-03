import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import ListForm from "./components/ListForm";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
        <Route path="/listform" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
