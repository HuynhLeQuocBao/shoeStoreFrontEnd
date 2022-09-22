import { Breadcum } from '@/components/section/title';
import { Men } from '@/components/section/type';
import { MenProduct } from '@/components/section/product';
import React from 'react';
import { BannerChild } from '@/components/section/banner';


export default function ShoesForMen() {
  return (
    <div>
      <Breadcum />
      <BannerChild text="MEN'S" />
      <Men />
      <MenProduct />
    </div>
  )
}