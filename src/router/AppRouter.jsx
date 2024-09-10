import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
// import PublicRoutes from "./PublicRoutes";
// import PrivateRoutes from "./PrivateRoutes";
import NoMatch from "../pages/NoMatch/NoMatch";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import useAppContext from "../hooks/useAppContext";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PostDetails from "../pages/PostDetails/PostDetails";
import UploadPost from "../components/UploadPost/uploadPost";


const AppRouter = () => {
//   const { user } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login/>} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route element={<PublicRoutes isAuthenticated={user.isAuth} />}> */}
            <Route path="login" element={<Login />} />
            <Route path="home" element={<HomePage />} />
            <Route path="register" element={<Register />} />
            <Route path="upload" element={<UploadPost />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoutes isAuthenticated={user.isAuth} />}> */}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="postDetails" element={<PostDetails />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
