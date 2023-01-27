import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Purchases from "./pages/Purchases";

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <AppNavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
