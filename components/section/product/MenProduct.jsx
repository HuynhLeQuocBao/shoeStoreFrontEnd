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

  const brands = [ "Nike", "Adidas", "Merel", "Gucci", "Skechers" ];

  const sizes= [
    "7","7.5",
    "8","8.5",
    "9","9.5",
    "10","10.5",
    "11","11.5",
    "12","12.5",
    "13","13.5",
    "14",
  ];

  const widths = [ "M", "W"];

  const styles = [ "Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"];

  const colors = ["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"];

  const materials = ["Leather", "Suede"];

  const technologies = ["BioBevel", "Groove", "FlexBevel"];

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mx-6 md:mx-0 pt-24">
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-2 text-sm text-[#616161] font-Rokkitt mb-2">
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">BRAND</h3>
              {
                brands.map((item, index) => (
                  <p className="cursor-pointer hover:text-primary" key={index}>{item}</p>
                ))
              }
            </div>
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">SIZE / WIDTH</h3>
              <h3 className="pb-4">SIZE</h3>
              {
                sizes.map((item, index) => (
                  <button className="w-10 h-10 mr-1 mb-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer" key={index}>{item}</button>
                ))
              }
              <h3 className="pb-4 pt-4">WIDTH</h3>
              {
                widths.map((item, index) => (
                  <button className="w-10 h-10 mr-1 mb-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer" key={index}>{item}</button>
                ))
              }
            </div>
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">STYLE</h3>
              {
                styles.map((item, index) => (
                  <p className="cursor-pointer hover:text-primary" key={index}>{item}</p>
                ))
              }
            </div>
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">COLORS</h3>
              {
                colors.map((item, index) => (
                  <p className="cursor-pointer hover:text-primary" key={index}>{item}</p>
                ))
              }
            </div>
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">MATERIAL</h3>
              {
                materials.map((item, index) => (
                  <p className="cursor-pointer hover:text-primary" key={index}>{item}</p>
                ))
              }
            </div>
            <div className="w-full border border-[#dee2e6] px-4 py-4">
              <h3 className="font-base font-semibold text-black pb-6">TECHNOLOGIES</h3>
              {
                technologies.map((item, index) => (
                  <p className="cursor-pointer hover:text-primary" key={index}>{item}</p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 pb-14">
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
      </div>
    </Container>
  );
}
