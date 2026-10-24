import Navbar from "@/components/Navbar";

const AuthLayout = ({children}) => {
    return (
        <div className="bg-slate-100 min-h-[100vh]">
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;