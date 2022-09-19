/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/common/index";
import Link from "next/link";
export function Men() {
  const content = [
    {
      image: "men.jpg",
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
      <div className="pb-24 mx-4 md:mx-0">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-around">
        {content.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="w-full py-[28px] cursor-pointer flex flex-col items-center">
              <img src={`/images/type/${item.image}`} alt="" className="w-full md:w-[600px] md:h-96 xl:w-full xl:h-full mb-5" />
              <div>
                <p className="xl:text-center text-xl xl:text-4xl font-normal">{item.title}</p>
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
