/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/common/index";

export function Product({ image, name, price }) {
  return (
    <div className="items-center text-center inline-flex flex-col">
      <div className="flex flex-row flex-wrap items-center justify-center xl:flex-nowrap space-8">
        <div>
          <img src={`${image}`} alt="" className="w-full" />
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export function BestSeller() {
  return (
    <Container>
      <div className="font-Rokkitt text-4xl font-bold text-center py-24">
        <h2>Best Sellers</h2>
      </div>
      <div className="pb-14"></div>
      <div className="mb-5 flex items-center justify-center">
        <button className="text-sm py-[18px] px-9 bg-primary text-white md:text-base rounded-[30px] hover:bg-secondary hover:text-white">
          <a href="">
            Shop All Products
          </a>
        </button>
      </div>
    </Container>
  );
}
