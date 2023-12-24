import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register') || location.pathname.includes('*');
    return (
        <div className="w-full overflow-hidden">
             {!noHeaderFooter && <Header/>}
            <div className="">
            <Outlet/>
            </div>
            {!noHeaderFooter && <Footer/>}
        </div>
    );
};

export default Main;