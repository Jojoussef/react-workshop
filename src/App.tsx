import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
