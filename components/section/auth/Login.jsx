/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/common/index";
import { authApi } from "@/apiClient/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import axios from "axios";

export function Login() {
	const { data: session } = useSession();
	const router = useRouter();
	if(session) {
		router.push("/");
	}

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
		const result = authApi.userLogin(data);
		console.log(result);
  };


	return (
		<Container>
			<div className="mx-4 md:mx-0 font-Rokkitt flex flex-col items-center">
				<div className="text-4xl font-bold text-center w-1/2">
					<h2>Log in</h2>
				</div>
				<form method="post" onSubmit={handleSubmit(onSubmit)} className="w-1/2">
					<div className="flex flex-col text-base text-secondary">
						<div className="flex flex-col mb-4">
							<label className="cursor-pointer" htmlFor="username">
								Email
							</label>
							<input
								className="px-3 py-2 mt-2 border border-black"
								id="username"
								{...register('email', { required: true })} 
								type="text"
								placeholder="Enter your username"
							/>
								{errors?.email?.type === "required" && <p className="text-red-500">This field is required</p>}
						</div>
						<div className="flex flex-col mb-4">
							<label className="cursor-pointer" htmlFor="password">
								Password
							</label>
							<input
								className="px-3 py-2 mt-2 border border-black"
								id="password"
								{...register('password', { required: true })} 
								type="password"
								placeholder="Enter your password"
							/>
								{errors?.password?.type === "required" && <p className="text-red-500">This field is required</p>}
						</div>
						<div className="my-4 text-center md:text-left">
							<button
								className="text-white bg-[#616161] rounded-[30px] hover:bg-primary px-3 py-2 w-1/3 block mx-auto"
								type="submit"
							>
								Login
							</button>
						</div>
						<div className="text-xl text-center">
							<p>Log in with</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="my-4 text-center md:text-left">
								<button
									className="text-white w-10 h-10 rounded-full cursor-pointer hover:opacity-70"
									type="submit"
									onClick={() => signIn("facebook")}
								>
									<img src="/images/logo/facebook.png" alt="" className="w-full"/>
								</button>
							</div>
							<div className="px-4 text-xl">
								<p>or</p>
							</div>
							<div className="my-4 text-center md:text-left">
								<button
									className="text-white w-10 h-10 rounded-full cursor-pointer hover:opacity-70"
									type="submit"
									onClick={() => signIn("google")}
								>
									<img src="/images/logo/google.png" alt="" className="w-full"/>
								</button>
							</div>
						</div>
					</div>
				</form>
				<div>
					<p>Don't have an account?
						<Link href="/register">
							<span className="cursor-pointer ml-1">Register</span>
						</Link>
					</p>
				</div>
			</div>
		</Container>
	);
}