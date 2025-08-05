// import { useState } from 'react'
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import {  Routes, Route, Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function App() {
    // const [count, setCount] = useState(0)

    return (
      <>
        <ul className="flex gap-4">
          <li>
            <IconButton component={Link} to="/login" color="inherit">
              <LoginIcon sx={{ mr: 1 }} />
              <Typography variant="button">Login</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton component={Link} to="/cart" color="inherit">
              <ShoppingCartIcon sx={{ mr: 1 }} />
              <Typography variant="button">Cart</Typography>
            </IconButton>
          </li>
        </ul>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    );
}

export default App;
