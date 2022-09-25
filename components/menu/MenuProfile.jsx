/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";

export function MenuProfile({ ShowModal }) {
	const { data: session } = useSession();
	console.log(session);

	const ModalLogin = () => {
		if (!session) {
			ShowModal();
		}
	};

	return (
		<Menu as="div" className="relative">
			<div className="flex items-center space-x-2 justify-center lg:justify-start">
				<Menu.Button as={session ? "button" : "div"}>
					<span className="sr-only">Open user menu</span>
					<img
						className="h-8 w-8 rounded-full bg-black"
						src={`${session?.user?.picture ?? "images/svg/user.svg"}`}
						alt=""
					/>
				</Menu.Button>

				{!session && (
					// <Link href="/">
					<div
						className="text-base font-[Rokkitt] font-normal text-black cursor-pointer hover:text-primary focus:text-primary"
						onClick={ModalLogin}
					>
						LOGIN
					</div>
					// </Link>
				)}
			</div>
			{session && (
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="origin-top-right absolute right-0 mt-2 w-full lg:w-80 overflow-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<button className="w-full p-2 font-bold hover:bg-gray-100">
									{session?.user?.fullname}
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className="w-full p-2 hover:bg-gray-100"
									onClick={() => signOut()}
								>
									Đăng xuất
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			)}
		</Menu>
	);
}
