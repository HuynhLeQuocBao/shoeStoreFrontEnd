import Image from "next/image";

import { Container } from "@/components/common/index";
import Link from "next/link";

export function BannerText() {
  const titles = [
    {
      details: "25% off (Almost) Everything! Use Code: Summer Sale",
    },
    {
      details: "Our biggest sale yet 50% off all summer shoes",
    },
  ]
  return (
    <div className="flex items-center justify-center bg-primary text-white text-xl py-4 uppercase">
        {
          titles.map((item, index)=> <h3 key={index}>{item.details}</h3>)
        }
    </div>
  );
}
