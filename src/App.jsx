import Top from "./pages/Top";
import db from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Footer from "./components/Footer";
import Lists from "./pages/Lists";
import CreateList from "./pages/CreateList";
import Question1 from "./pages/questions/Question1";
import Question2 from "./pages/questions/Question2";
import { useState } from "react";
import Question3 from "./pages/questions/Question3";
import Practice from "./pages/Practice";
import SingleList from "./pages/SingleList";
import ListTitle from "./pages/ListTitle";

const App = () => {
  const [answer, setAnswer] = useState([]);
  const addAnswer = (choice) => {
    setAnswer([...answer, choice]);
  };
  console.log(answer);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/list" element={<List />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/create" element={<CreateList />} />
        <Route
          path="/create/title"
          element={<ListTitle addAnswer={addAnswer} />}
        />
        <Route
          path="/create/question1"
          element={<Question1 addAnswer={addAnswer} answer={answer} />}
        />
        <Route
          path="/create/question2"
          element={<Question2 addAnswer={addAnswer} answer={answer} />}
        />
        <Route
          path="/create/question3"
          element={<Question3 addAnswer={addAnswer} answer={answer} />}
        />
        <Route path="/lists/:id" element={<SingleList />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
