import { Outlet } from "react-router-dom";
import "./App.scss";

// components import
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default App;
