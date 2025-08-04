// import { useState } from 'react'
import "./App.css";
import Cart from "./components/pages/Cart";
import Header from "./components/pages/Header";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    {/* <Route path="/search" element={<SearchPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/cart" element={<CartPage />} /> */}
                </Routes>
                <Cart />
            </Router>
        </>
    );
}

export default App;
