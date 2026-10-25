"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";


const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const onSubmit = (data) => console.log(data, "data")

    const handleRegisterFunc = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required, The name of the user.
            email: email, // required, The email address of the user.
            password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image: photo, // An optional profile image of the user.
            callbackURL: '/',
        });
        console.log(res, error)

        if (res) {
            alert("Signup success", res)
        }
        else if (error) {
            alert(error.message)
        }

    }

    const { data: session } = authClient.useSession()


    return (
        <div>
            {
                session ? redirect("/") :
                    <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
                        <div className="md:w-150 bg-white flex flex-col items-center justify-center p-15 rounded">
                            <h1 className="text-3xl font-bold">Register your account</h1>
                            <hr className="w-full my-8 text-gray-300" />
                            <form onSubmit={handleSubmit(handleRegisterFunc)} action="" className="w-full space-y-6">

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
                                        // required
                                        // {...register("photo")}
                                        type="text" className="input w-full bg-gray-100 border-none h-12" placeholder="Enter your photo URL (optional)" />
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
                                <button className="btn w-full bg-slate-700 text-white h-12">Register</button>
                            </form>
                            <p className="text-gray-800 mt-6">I Have Already An Account ? <Link className="text-red-500" href="/login">Login</Link></p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Register;