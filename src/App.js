import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import Registration from "./Pages/Registration/Registration";
import SendPasswordReset from "./Pages/SendPasswordReset/SendPasswordReset ";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Toaster />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/sendPasswordReset"
          element={<SendPasswordReset></SendPasswordReset>}
        ></Route>
        <Route
          path="/manageInventories"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
