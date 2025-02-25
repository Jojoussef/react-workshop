import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={HomePage} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
