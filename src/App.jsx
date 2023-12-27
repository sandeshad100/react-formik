import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import LatestArticles from "./components/LatestArticles";
import { ViewCate } from "./pages/user/viewCategory/ViewCate";
import Home from "./pages/user/home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="blogview" element={<BlogView />}></Route>
          </Route> */}
          <Route path="" element={<ViewCate />}></Route>
          <Route path="viewCategory" element={<ViewCate />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
