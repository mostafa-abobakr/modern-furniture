import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

function App() {
    return (
        <>
            <h1 className="bg-amber-200">header</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<index/>} />
                    <Route path="/shop" element={<NotFound/>} />
                    <Route path="/cart" element={<NotFound/>} />
                    <Route path="/about" element={<NotFound/>} />
                    <Route path="/contact" element={<NotFound/>} />
                    <Route path="/login" element={<NotFound/>} />
                    <Route path="/signup" element={<NotFound/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
