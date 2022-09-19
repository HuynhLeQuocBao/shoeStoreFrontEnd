/* eslint-disable @next/next/no-img-element */
import { productApi } from "@/apiClient/product";
import { Container } from "@/components/common/index";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Product({ image, name, price }) {
  return (
        <div className="flex flex-col items-center justify-center mb-7 border border-[#dee2e6]">
          <div>
            <img src={`http://localhost:3010/upload/${image}`} alt="" className="w-64 h-64 pb-4" />
          </div>
          <div className="text-center font-Rokkitt text-lg">
            <p className="pb-4">{name}</p>
            <p className="pb-4">${price}</p>
          </div>
        </div>
  );
}
export function BestSeller() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fechPublic = async () => {
        const dataProduct = await productApi.getAllProducts();
        setData(dataProduct);
      };
      fechPublic();
    } catch (error) {
      console.log("Error");
    }
  }, []);
  console.log(data)
  return (
    <Container>
      <div className="font-Rokkitt text-4xl font-bold text-center py-24">
        <h2>Best Sellers</h2>
      </div>
      <div className="pb-14 flex justify-between flex-wrap">
        {data.map((item)=> (
          <Link href={`${item._id}`}>
            <a>
              <Product 
                image={item.arrayImage[0].filename}
                name={item.name}
                price={item.price}
              />
            </a>
          </Link>
        ))}
      </div>
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
