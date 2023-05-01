import { Outlet } from "react-router-dom";
import "./App.css";

// components import
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
