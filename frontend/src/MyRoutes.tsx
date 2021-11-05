import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;