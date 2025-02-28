import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage";
import Chatbot from "./pages/Chatbot";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/todo" Component={TodoList} />
          <Route path="/chatbot" Component={Chatbot} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
