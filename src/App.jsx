import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import Lists from "./pages/Lists";
import CreateList from "./pages/CreateList";
import Question1 from "./pages/questions/Question1";
import Question2 from "./pages/questions/Question2";
import Questions3 from "./pages/questions/Questions3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/create" element={<CreateList />} />
        <Route path="/create/question1" element={<Question1 />} />
        <Route path="/create/question2" element={<Question2 />} />
        <Route path="/create/question3" element={<Questions3 />} />
        <Route path="/practice" element={<TopButton />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
