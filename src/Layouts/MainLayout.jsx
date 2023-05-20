import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className = 'bg-neutral1 min-h-screen'>
            <Navbar></Navbar>
            <Outlet className =''></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;