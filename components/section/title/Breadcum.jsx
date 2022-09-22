/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/common/index';
import { useRouter } from "next/router";
import Link from "next/link";
export function Breadcum() {
  const router = useRouter();
  const navigation = [
    {
      name: "Men",
      href: "/shoes-for-men",
    },
    {
      name: "Women",
      href: "/shoes-for-women",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Product Detail",
      href: "/product-detail/[...slug]",
    },
  ];
  return (
    <Container>
      <div className="py-3 mx-4 md:mx-0 text-base font-Rokkitt text-primary">

        <Link href="/">
          <div className="cursor-pointer uppercase">
            Home / 
            {navigation.map((item) => {
              if(router.pathname === item.href) {
                return <span className="text-black ml-1">{item.name}</span>;
              }
            })}
          </div>
        </Link>
      </div>
    </Container>
  );
}
