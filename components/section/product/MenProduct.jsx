/* eslint-disable @next/next/no-img-element */
import { productApi } from "@/apiClient/product";
import { Container } from "@/components/common/index";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import Link from "next/link";

export function MenProduct() {
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

  console.log(process.env)

  return (
    <Container>
      <div className="mx-6 md:mx-0">
        <div className="font-Rokkitt text-xl text-[#0000004D] font-semibold text-center py-24">
          <h2>VIEW ALL PRODUCTS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-8 pb-14">
          {data.map((item)=> (
            <Link key={item._id} href={"/"}>
              <div className="cursor-pointer" onClick={()=> alert(item._id)}>
                <Product 
                  image={item.arrayImage[0].filename}
                  name={item.name}
                  price={item.price}
                />
              </div>
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
      </div>
    </Container>
  );
}
