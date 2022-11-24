import { categoryApi } from "@/apiClient/category";
import { useEffect, useState } from "react";

export function Category() {

  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fechPublic = async () => {
        const dataCategory = await categoryApi.getCatagory();
        setData(dataCategory);
      };
      fechPublic();
    } catch (error) {
      console.log("Error");
    }
  }, []);

  const widths = ["M", "W"];

  const colors = ["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"];

  return (
    <div className="grid grid-cols-1 gap-2 text-sm text-[#616161] font-Rokkitt mb-2">
      <div className="w-full border border-[#dee2e6] px-4 py-4">
        <h3 className="font-base font-semibold text-black pb-6">BRAND</h3>
        {
          data?.brand?.map((item, index) => (
            <p className="cursor-pointer hover:text-primary" key={index}>{item.cateName}</p>
          ))
        }
      </div>
      <div className="w-full border border-[#dee2e6] px-4 py-4">
        <h3 className="font-base font-semibold text-black pb-6">SIZE / WIDTH</h3>
        <h3 className="pb-4">SIZE</h3>
        {
          data?.size?.map((item, index) => (
            <button className="w-10 h-10 mr-1 mb-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer" key={index}>{item.cateName}</button>
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
          data?.style?.map((item, index) => (
            <p className="cursor-pointer hover:text-primary" key={index}>{item.cateName}</p>
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
    </div>
  );
}
