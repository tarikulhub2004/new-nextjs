"use client"
// import Link from "next/link";
import usersLogo from "../assets/user.png"
import Image from "next/image";
import NavLink from "./shared/NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { use } from "react";
import { BsListNested } from "react-icons/bs";

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    // console.log(session)
    const user = session?.user
    // console.log(user)

    const handleLogOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className="flex flex-col md:flex-row w-full items-end gap-3 md:justify-between container mx-auto my-4">
            <div className="w-30"></div>

            <div className="flex gap-3 text-gray-500">
                <button><NavLink href={"/"}>Home</NavLink></button>
                <button><NavLink href={"/about-us"}>About</NavLink></button>
                <button><NavLink href={"/career"} className={"text-yellow-500"}>Career</NavLink></button>
            </div>

            {
                isPending ? (
                    <span className="loading loading-bars loading-md"></span>
                ) : session ? (
                    <div className="flex gap-3">
                        <h2 className="mt-2">Hello, {user?.name}</h2>
                        <Image className="rounded-full" src={user?.image || usersLogo}
                            width={40}
                            height={40}
                            alt="User logo"></Image>
                        <button onClick={handleLogOut} className="btn bg-red-700 text-white px-8">Log Out</button>
                    </div>
                ) : <Link href='/login'><button className="btn bg-gray-700 text-white px-8">Login</button></Link>
            }

        </div>
    );
};

export default Navbar;