import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="h-full min-h-screen text-textColor">
        <Outlet />
      </main>
      <footer className="mb-0">
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Layout;
