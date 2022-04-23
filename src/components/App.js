import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home components/Home";
import Signup from "./pages/Signup components/Signup";
import Login from "./pages/Login components/Login";
import Quiz from "./pages/Quiz components/Quiz";
import Result from "./pages/Result components/Result";
import { AuthProvider } from "../contexts/AuthContex";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/signup"
              element={<PublicOutlet Element={<Signup />} />}
            />
            <Route
              path="/login"
              element={<PublicOutlet Element={<Login />} />}
            />

            <Route
              path="/quiz/:id"
              element={<PrivateOutlet Element={<Quiz />} />}
            />

            <Route
              path="/result/:id"
              element={<PrivateOutlet Element={<Result />} />}
            />
            
            <Route path="*" element={<h1>Data was not Found</h1>} />
            {/* <Route path="/react-quiz-web" element={<Home />} /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
