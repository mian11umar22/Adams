import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Category from "./Pages/Categoy";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from "./Pages/Message";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
