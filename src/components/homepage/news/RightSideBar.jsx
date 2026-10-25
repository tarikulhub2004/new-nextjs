"use client"
import { FaGithub, FaGoogle } from "react-icons/fa";
import fbImg from "../../../assets/fb.png"
import twImg from "../../../assets/twitter.png"
import insImg from "../../../assets/instagram.png"
import swiImg from "../../../assets/swimming.png"
import claImg from "../../../assets/class.png"
import plImg from "../../../assets/playground.png"
import bg from "../../../assets/bg.png"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data,"data")
    }

    const handleGithubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        // console.log(data,"data")
    }

    const { data: session } = authClient.useSession()


    return (
        <div className="">

            {
                !session &&
                <div className="">
                    <h2> Login with</h2>

                    <div className="flex flex-col gap-3 m-5">
                        <button onClick={handleGoogleLogin} className="btn text-blue-400 font-normal border-blue-400"><FaGoogle /> Login with Google</button>
                        <button onClick={handleGithubLogin} className="btn text-gray-700 font-normal border-gray-700"><FaGithub /> Login with Github</button>
                    </div>
                </div>

            }

            <h1 className="mb-3">Find Us On</h1>

            <div className="text-lg font-normal text-gray-600">
                <div className="flex items-center gap-2 p-4 border border-gray-300 rounded-t-md">
                    <div className="p-3 bg-gray-100 w-10 flex justify-center rounded-full"><Image src={fbImg} alt="Facbook" /></div><h1>Facebook</h1>
                </div>
                <div className="flex items-center gap-2 p-4 border border-gray-300 border-y-0">
                    <div className="p-3 bg-gray-100 w-10 flex justify-center rounded-full"><Image src={twImg} alt="Facbook" /></div><h1>Twitter</h1>
                </div>
                <div className="flex items-center gap-2 p-4 border border-gray-300 rounded-b-md">
                    <div className="p-3 bg-gray-100 w-10 flex justify-center rounded-full"><Image src={insImg} alt="Facbook" /></div><h1>Instagram</h1>
                </div>
            </div>

            <div className="bg-gray-100 p-3 mt-8">
                <h1 className="my-5=4">Q-Zone</h1>
                <Image src={swiImg} alt="Swimming Image" className="w-full" />
                <Image src={claImg} alt="Class Image" className="w-full" />
                <Image src={plImg} alt="Playground Image" className="w-full" />
            </div>
            <Image className="mt-5" src={bg} alt="bg"></Image>
        </div>
    );
};

export default RightSideBar;