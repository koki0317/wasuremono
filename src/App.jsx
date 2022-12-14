import Top from "./pages/Top";
import { Routes, Route, useLocation } from "react-router-dom";
import List from "./pages/List";
import Footer from "./components/Footer";
import Lists from "./pages/Lists";
import CreateList from "./pages/CreateList";
import Question1 from "./pages/questions/Question1";
import Question2 from "./pages/questions/Question2";
import { useEffect, useState } from "react";
import Question3 from "./pages/questions/Question3";
import SingleList from "./pages/SingleList";
import ListTitle from "./pages/ListTitle";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
// import { PacmanLoader } from "react-spinners";

const App = () => {
  const [answer, setAnswer] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  const addAnswer = (choice) => {
    setAnswer([...answer, choice]);
  };

  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
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
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
