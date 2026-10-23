import Link from "next/link";
import usersLogo from "../assets/user.png"
import Image from "next/image";
import NavLink from "./shared/NavLink";

const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto my-4">
            <div className=""></div>

            <div className="flex gap-3 text-gray-500">
                <button><NavLink href={"/"}>Home</NavLink></button>
                <button><NavLink href={"/about-us"}>About</NavLink></button>
                <button><NavLink href={"/career"} className={"text-yellow-500"}>Career</NavLink></button>
            </div>
            
            <div className="flex gap-3">
                <Image src={usersLogo} alt="User logo"></Image>
                <button className="btn bg-gray-700 text-white px-8">Login</button>
            </div>
        </div>
    );
};

export default Navbar;