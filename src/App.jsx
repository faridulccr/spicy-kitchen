import { Outlet } from "react-router-dom";
import "./App.scss";

// components import
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
