import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DashboardPage from "./components/DashboardPage";
import ItemListingPage from "./components/ItemListingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import "./index.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="rewear-ui-theme">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/list-item" element={<ItemListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;