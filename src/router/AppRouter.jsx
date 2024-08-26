import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import NoMatch from "../pages/NoMatch/NoMatch"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import News from "../pages/News/News"
import NewsDetails from "../pages/NewsDetails/NewsDetails"
import AdminPanel from "../pages/AdminPanel/AdminPanel"


const AppRouter = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="*" element={<NoMatch/> } />
                  <Route element={<PublicRoutes isAuthenticated={false} />}>
                      <Route path="login" element={<Login />} />
                      <Route path="register" element={<Register/> } />
                  </Route>
                  <Route element={<PrivateRoutes isAuthenticated={false} />}>
                      <Route path="news" element={<News />}>
                          <Route path=":newsId" element={<NewsDetails/> } />
                      </Route>
                      <Route path="admin" element={<AdminPanel/> } />
                  </Route>
              </Route>
          </Routes>
    </Router>
  )
}

export default AppRouter