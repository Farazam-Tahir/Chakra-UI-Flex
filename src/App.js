import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

function App() {
  return (
    <Container maxWidth='6xl' shadow='2xl'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contact" Component={Contact} />
        <Route path="/shop" Component={Shop} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
