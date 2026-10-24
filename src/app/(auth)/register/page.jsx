"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => console.log(data, "data")

    return (
        <div className="container mx-auto h-[80vh] flex items-center justify-center">
            <div className="md:w-150 bg-white flex flex-col items-center justify-center p-15 rounded">
                <h1 className="text-3xl font-bold">Register your account</h1>
                <hr className="w-full my-8 text-gray-300" />
                <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full space-y-6">

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl">Your name</legend>
                        <input
                            required
                            {...register("name")}
                            type="text" className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your name" />
                    </fieldset>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl">Photo URL</legend>
                        <input
                            required
                            {...register("photo url")}
                            type="text" className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your photo URL" />
                    </fieldset>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl">Email address</legend>
                        <input
                            required
                            {...register("email")}
                            type="email" className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your email address" />
                    </fieldset>

                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend text-xl">Password</legend>
                        <input
                            required
                            {...register("password")}
                            type="password"
                            className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your password" />
                    </fieldset>
                    <button className="btn w-full bg-slate-700 text-white h-12">Login</button>
                </form>
                <p className="text-gray-800 mt-6">I Have Already An Account ? <Link className="text-red-500" href="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default RegisterPage;