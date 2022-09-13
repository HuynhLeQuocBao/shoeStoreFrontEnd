/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/common/index";
import { MenuItem, MenuProfile } from "@/components/menu/index";
import ModalLogin from "@/components/section/modal-login/ModalLogin";

const navigation = [
  {
    name: "Trang chủ",
    href: "/damchattoi",
  },
  {
    name: "Thể lệ cuộc thi",
    href: "/the-le-cuoc-thi",
  },
  {
    name: "Gửi bài dự thi",
    href: "/gui-bai-du-thi",
  },
  {
    name: "Tìm hiểu về TV The Serif",
    href: "/tim-hieu-ve-tv-the-serif",
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
    <Popover className="ml-auto lg:hidden">
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none text-white">
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
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
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
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-black p-6 tracking-tight shadow-xl ring-1 ring-slate-900/5 text-center"
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
                <li>
                  <MenuProfile ShowModal={ShowModal} />
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
      className={clsx("py-2 lg:py-4 bg-black sticky z-50 top-0", {
        "shadow-lg": isScrolled,
      })}
    >
      <Container>
        <div className="flex items-center relative z-50 pl-16 md:pl-28 lg:pl-20">
          <div className="max-w-[75px] sm:max-w-[300px]">
            <Link href="/damchattoi">
              <a>
                <img src="/images/logo/sam_sung_the_serif.png" alt="" />
              </a>
            </Link>
          </div>

          <nav className="ml-auto hidden lg:block">
            <ul className="flex items-center space-x-7">
              {navigation.map((item) => (
                <li key={item.name}>
                  <MenuItem
                    href={item.href}
                    name={item.name}
                    isActive={router.pathname === item.href}
                  />
                </li>
              ))}

              <li>
                <MenuProfile ShowModal={ShowModal} />
              </li>
            </ul>
          </nav>

          <MobileNavigation ShowModal={ShowModal} />
          <ModalLogin open={open} setOpen={setOpen} />
        </div>
      </Container>
    </header>
  );
}
