import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="bg-green-100 min-h-screen max-w-screen-md mx-auto">
            <div className="flex justify-center">
                Header
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;