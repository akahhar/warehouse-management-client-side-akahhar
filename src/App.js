import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blogs/Blog";
import Home from "./Pages/Home/Home/Home";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Login from "./Pages/Login/Login";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Registration from "./Pages/Registration/Registration";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
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
          path="/inventory/:itemsId"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/ManageItems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
