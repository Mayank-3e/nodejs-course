import AddProduct from "./components/AddProduct";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Page404 from "./components/Page404";
import { ProductsProvider } from "./store/products-store";

function App() {
  return <ProductsProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/admin/add-product" element={<AddProduct/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  </ProductsProvider>
}

export default App;
