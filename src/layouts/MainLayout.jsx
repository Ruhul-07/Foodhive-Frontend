import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname); // Log the path
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    const hideHeaderFooter = ["/auth/login", "/auth/signUp"].includes(location.pathname);

  return (
    <div>
       {!hideHeaderFooter && <Navbar />}
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
      {!hideHeaderFooter && <Footer />}
      </footer>
    </div>
  );
};

export default MainLayout;
