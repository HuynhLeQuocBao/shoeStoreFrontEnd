/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Container } from "@/components/common/index";
import { authApi } from "@/apiClient/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";

export function Login() {
	const {
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		mode: "onChange",
	});

	const onSubmitLogin = (data) => {
		const formData = new FormData();
		formData.append("username", data.username);
		formData.append("password", data.password);
		console.log(formData);
	};

	return (
		<Container>
			<div className="mx-4 md:mx-0 font-Rokkitt py-24">
				<form onSubmit={handleSubmit((values) => onSubmitLogin(values))}>
					<div className="flex flex-col justify-evenly text-base text-secondary">
						<div className="flex flex-col mb-4">
							<label className="cursor-pointer" for="username">
								Username
							</label>
							<input
								className="px-3 py-2 mt-2 border-2 border-black"
								id="username"
								name="username"
								type="text"
								placeholder="Enter your username"
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label className="cursor-pointer" for="password">
								Password
							</label>
							<input
								className="px-3 py-2 mt-2 border-2 border-black"
								id="password"
								name="password"
								type="password"
								placeholder="Enter your password"
							/>
						</div>
						<div className="my-4 text-center md:text-left">
							<button
								className="text-white bg-[#616161] rounded-[30px] hover:bg-primary px-3 py-2"
								type="submit"
							>
								Login
							</button>
						</div>
						{/* Login facebook and google button */}
						<div className="my-4 text-center md:text-left">
							<button
								className="text-white bg-[#616161] rounded-[30px] hover:bg-primary px-3 py-2"
								type="submit"
								onClick={() => signIn("facebook")}
							>
								Login by Facebook
							</button>
						</div>
						<div className="my-4 text-center md:text-left">
							<button
								className="text-white bg-[#616161] rounded-[30px] hover:bg-primary px-3 py-2"
								type="submit"
								onClick={() => signIn("google")}
							>
								Login by Google
							</button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}
