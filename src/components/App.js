import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home components/Home";
import Signup from "./pages/Signup components/Signup";
import Login from "./pages/Login components/Login";
import Quiz from "./pages/Quiz components/Quiz";
import Result from "./pages/Result components/Result";
import { AuthProvider } from "../contexts/AuthContex";
// import PrivateRoute from "./PrivateRoute";
import PrivateOutlet from "./PrivateOutlet";
// import PublicRoute from "./PublicRoute";
import PublicOutlet from "./PublicOutlet";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>

            {/* <Route
              path="/signup"
              element={<PublicRoute element={<Signup />} />}
            />
            <Route
              path="/login"
              element={<PublicRoute element={<Login />} />}
            /> */}

            <Route path="/" element={<PrivateOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>

            {/* <Route
              path="/quiz/:id"
              element={<PrivateRoute element={<Quiz />} />}
            />

            <Route
              path="/result/:id"
              element={<PrivateRoute element={<Result />} />}
            />
             */}
            <Route path="*" element={<h1>Data was not Found</h1>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
