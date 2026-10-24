"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";


const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => console.log(data, "data")


    return (
        <div>
            <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
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
                                {...register("email", {
                                    required: "Email field is required"
                                })}
                                type="email" className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your email address" />
                            {errors.email &&
                                <p className="text-red-500">{errors.email.message}</p>}
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-xl">Password</legend>
                            <input
                                {...register("password", {
                                    required: "Password field is required"
                                })}
                                type="password"
                                className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your password" />
                            {errors.password &&
                                <p className="text-red-500">{errors.password.message}</p>}
                        </fieldset>
                        <button className="btn w-full bg-slate-700 text-white h-12">Login</button>
                    </form>
                    <p className="text-gray-800 mt-6">I Have Already An Account ? <Link className="text-red-500" href="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;