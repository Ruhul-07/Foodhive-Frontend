import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const AuthLayout = () => {
    return (
        <div>
            <header>
                {/* <Navbar></Navbar> */}
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default AuthLayout;