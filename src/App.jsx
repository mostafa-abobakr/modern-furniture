import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { Tooltip } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/layout/Header";

// import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Tooltip>
        <CartProvider>
          <Snackbar>
            <Alert />
          </Snackbar>
          <div className="min-h-screen flex flex-col">
            <Header />
            
          </div>
        </CartProvider>
      </Tooltip>
    </Router>
  </QueryClientProvider>
  
);

export default App;
