/* eslint-disable @next/next/no-img-element */
import { productApi } from "@/apiClient/product";
import { Container } from "@/components/common/index";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import Link from "next/link";

export function BestSeller() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);

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
  
  const showAll = () => {
    setFlag(!flag);
  }

  return (
    <Container>
      {
        flag &&
        <div className="mx-6 md:mx-0">
          <div className="font-Rokkitt text-4xl font-bold text-center py-24">
            <h2>Best Sellers</h2>
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
            <button className="text-sm py-[18px] px-9 bg-primary text-white md:text-base rounded-[30px] hover:bg-secondary hover:text-white" onClick={showAll}>
              Shop All Products
            </button>
          </div>
        </div>
      }
      {
        !flag &&      
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
              Phần làm phân trang
            </button>
          </div>
        </div>
      }
    </Container>
  );
}
