// import "./App.css";
import StoreNavbar from "./component/StoreNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./component/List";

function App() {
  return (
    <div >
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
