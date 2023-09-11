"use client";


import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import Button from "@/components/ui/Button";
import { AuthInfoType } from "../../../../type";
import { ChangeEvent, useState } from "react";


const LoginRegister = () => {

    const [ data, setData] = useState<AuthInfoType>({

        email:"",
        password:"",
    })


      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };

    


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        console.log(data);



    }
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 w-screen overflow-auto h-screen ">
                <div className="flex flex-col h-[50vh] items-center justify-center text-center gap-4">


                    <div className="bg-white h-[50vh] rounded-2xl shadow-2xl flex">
                        <div className="flex flex-col gap-4 p-4 md:w-1/2">

                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h2 className="text-3xl font-bold text-primary">
                                    Sign in
                                </h2>
                                <div className="bg-primary h-1 w-10 inline-block"></div>

                                <form
                                    className="flex flex-col items-center gap-4"
                                    onSubmit={handleSubmit}

                                >
                                    <div className="bg-gray-100 p-2 flex items-center rounded-md">
                                        <AiOutlineUser className="text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            onChange={handleChange}

                                            className="bg-gray-100 outline-none text-sm w-full p-2 rounded-md"
                                        />
                                    </div>
                                    <div className="bg-gray-100 p-2 flex items-center rounded-md">
                                        <MdLockOutline className="text-gray-400" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            onChange={handleChange}

                                            className="bg-gray-100 outline-none text-sm w-full p-2 rounded-md"
                                        />
                                    </div>

                                    <div className="flex justify-betwee">
                                        <a href="/forgotPassword" className="text-xs">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <Button btnType={"circular"} mode={"dark"}  >
                                        Sign In

                                    </Button>

                                </form>
                                <div className="text-black text-sm md:hidden">
                                    Don't have an account? Sign Up
                                    <a className="text-primary" href="/signup">
                                        Here
                                    </a>
                                    !
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-col gap-4 justify-center items-center hidden bg-primary text-white rounded-tr-2xl rounded-br-2xl p-4 md:w-1/2">
                            <h2 className="text-3xl text-yellow font-bold">Hello, Friend!</h2>
                            <div className="bg-white h-1 w-10 inline-block"></div>
                            <p className="">
                                Don't have an account? Register your self and get started
                            </p>
                            <Link href={"/signup"}>
                                {/* <div className="border-2 border-white rounded-full inline-block font-semibold hover:bg-white hover:text-primary px-4 py-2">
                                    Sign Up
                                </div> */}
                                <Button btnType={"circular"} mode={"light"}  >
                                        Sign Up

                                    </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginRegister