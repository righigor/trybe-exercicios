import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar";

function Layout () {
  return (
    <>
      <NavBar />
    <Outlet />
      <footer>
        <span>Criado por Igor Righi</span>
      </footer>
    </>
  )
}

export default Layout;