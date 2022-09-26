/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Container } from "@/components/common/index";
import { authApi } from "@/apiClient/auth";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { MdFacebook } from "react-icons/md";

export function Register() {
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
			<div className="mx-4 md:mx-0 font-Rokkitt flex flex-col items-center">
				<div className="text-4xl font-bold text-center w-1/2">
					<h2>Register</h2>
				</div>
				<form onSubmit={handleSubmit((values) => onSubmitLogin(values))} className="w-1/2">
					<div className="flex flex-col text-base text-secondary">
						<div className="flex flex-col mb-4">
							<label className="cursor-pointer" for="username">
								Username
							</label>
							<input
								className="px-3 py-2 mt-2 border border-black"
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
								className="px-3 py-2 mt-2 border border-black"
								id="password"
								name="password"
								type="password"
								placeholder="Enter your password"
							/>
						</div>
						<div className="my-4 text-center md:text-left">
							<button
								className="text-white bg-[#616161] rounded-[30px] hover:bg-primary px-3 py-2 w-1/3 block mx-auto"
								type="submit"
							>
								Register
							</button>
						</div>
					</div>
				</form>
			</div>
		</Container>
	);
}
