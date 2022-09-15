/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/common/index";
import { MenuItem, MenuProfile } from "@/components/menu/index";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const navigation = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "MEN",
    href: "/shoes-for-men",
  },
  {
    name: "WOMEN",
    href: "/shoes-for-women",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

function MenuIconSVG() {
  return <img src="images/svg/menu-unfold-one.svg" />;
}

function MenuIconCloseSVG() {
  return <img src="images/svg/close.svg" />;
}

function MobileNavigation({ ShowModal }) {
  const router = useRouter();

  return (
    <Popover className="ml-auto md:hidden">
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-30 flex h-10 w-10 items-center justify-center [&:not(:focus-visible)]:focus:outline-none bg-primary outline-none rounded-2xl">
            <span className="sr-only">Toggle Navigation</span>
            {open ? <MenuIconCloseSVG /> : <MenuIconSVG />}
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50 z-20" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-3 top-40 space-y-4 rounded-2xl bg-primary p-6 shadow-xl flex flex-col items-center justify-around z-30 font-Rokkitt"
              >
                {navigation.map((item) => (
                  <li key={item.name} onClick={close}>
                    <MenuItem
                      href={item.href}
                      name={item.name}
                      isActive={router.pathname === item.href}
                    />
                  </li>
                ))}
                  <li onClick={close}>
                    <a href="/">
                      <div className="flex flex-row text-white md:text-black font-Rokkitt font-normal hover:text-primary focus:text-primary">
                        <div className="text-2xl">
                          <FaShoppingCart />
                        </div>
                        <p className="mx-2">CART</p>
                        <p>[0]</p>
                      </div>
                    </a>
                  </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}
``;

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // TODO: Move to custom hooks
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ShowModal = () => setOpen(true);

  return (
    <header
      className={clsx("md:sticky z-50 top-0 bg-white", {
        "md:shadow-lg": isScrolled,
      })}
    >
      <Container>
        <div className="flex flex-col md:justify-evenly md:h-[170px] md:mt-[25px]">
          <div className="flex flex-col px-3 py-7 md:flex-row md:justify-between">
            <div className="">
              <div className="mb-5 flex flex-row items-center justify-between md:mb-0" >
                <a href="/" className="text-secondary text-4xl font-bold">
                  Footwear
                </a>
                <MobileNavigation ShowModal={ShowModal} />
              </div>
            </div>
            <div className="mb-5 md:mb-0">
              <form className="flex relative">
                <input type="text" placeholder="Search" className="h-[40px] w-full rounded-[30px] pl-4 pr-[4.5rem] focus:outline-none overflow-hidden border" />
                <button type="submit" className="w-[40px] h-[40px] rounded-full bg-primary text-white focus:outline-none absolute right-0 hover:bg-secondary"><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>

          <div className="hidden font-Rokkitt md:flex md:flex-row md:justify-between md:mt-[25px]">
            <ul className="flex flex-row">
              {navigation.map((item) => (
                <li key={item.name} className="my-2 mx-3">
                  <MenuItem
                    href={item.href}
                    name={item.name}
                    isActive={router.pathname === item.href}
                  />
                </li>
              ))}
            </ul>
            <ul className="flex items-center my-2 mx-3">
              <li className="mr-20">
                <a href="/">
                  <div className="flex flex-row text-black hover:text-primary focus:text-primary">
                    <div className="m-auto text-2xl">
                      <FaShoppingCart />
                    </div>
                    <p className="mx-2">CART</p>
                    <p>[0]</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="/login">
                  <div className="flex flex-row text-black font-normal hover:text-primary focus:text-primary">
                    <div className="m-auto text-2xl">
                      <FaUserAlt />
                    </div>
                    <p className="mx-2">LOGIN</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
