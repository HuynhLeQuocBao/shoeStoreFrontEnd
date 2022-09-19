/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/common/index";
import Link from "next/link";
export function Women() {
  const content = [
    {
      image: "women.jpg",
      title: "CASUALS",
      href: "/shoes-for-men",
    },
    {
      image: "women.jpg",
      title: "DRESS",
      href: "/shoes-for-men",
    },
    {
      image: "women.jpg",
      title: "SPORTS",
      href: "/shoes-for-men",
    }
  ];
  return (
    <Container>
      <div className="mx-4 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="relative w-full md:py-[28px] cursor-pointer flex flex-col items-center">
            <img src={`/images/type/${item.image}`} alt="" className="w-full md:w-64 md:h-64 xl:w-96 xl:h-96 mb-5" />
            <div className="absolute top-16 flex flex-col items-center justify-between">
              <p className="xl:text-center text-xl xl:text-4xl font-normal text-white font-Rokkitt h-[70px]">{item.title}</p>
              <button className="text-sm py-[18px] px-9 hover:bg-primary text-white md:text-base rounded-[30px] bg-secondary">
                <a href="">
                  Shop now
                </a>
              </button>
            </div>
          </div>   
        </Link>
        ))}
        </div>
      </div>
    </Container>
  );
}
