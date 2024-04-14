import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <div className="items-container"></div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
