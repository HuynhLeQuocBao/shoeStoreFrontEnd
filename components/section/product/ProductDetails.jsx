/* eslint-disable @next/next/no-img-element */
import { productApi } from "@/apiClient/product";
import { Container } from "@/components/common/index";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/router';
import Slider from "react-slick";

export function ProductDetail() {

  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [content, setContent] = useState(1);

  const router = useRouter();
  const productId = router.query.slug;

  const widths = ["M", "W"];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
};

  const handleAsc = () => {
    setQuantity(quantity++);
  }

  const handleDesc = () => {
    if(quantity <= 1) {
      setQuantity(1);
    }
    else {
      setQuantity(quantity--);
    }
  }

  useEffect(() => {
    try {
      const fechPublic = async () => {
        const dataProduct = await productApi.getProductById(productId);
        setData(dataProduct);
      };
      fechPublic();
    } catch (error) {
      console.log("Error");
    }
  }, []);
  console.log(data);

  return (
    <Container>
      <div className="grid grid-cols-1 xl:grid-cols-8 md:gap-12 mx-6 md:mx-0 py-24">
        <div className="mb-8 col-span-5">
          <Slider {...settings}>
            {
              data?.arrayImage?.map((item, index) => (
                <div key={index} className="w-full">
                  <img className="w-full h-full object-cover" src={`http://localhost:3010/upload/${item?.filename}`} />
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="col-span-3">
          {
            <div className="flex flex-col justify-between">
              <h2 className="mb-4 text-xl font-semibold">{data.name}</h2>
              <h3 className="mb-2 text-lg">${parseFloat(data.price).toFixed(2)}</h3>
              <h3 className="mb-4 text-xs">RATING</h3>
              <p className="text-sm text-secondary font-light text-justify">{data.introduce}</p>
              <div className="w-full mt-4 mb-8">
                <h3 className="pb-2">SIZE</h3>
                {
                  data?.size?.map((item, index) => (
                    <button className="w-10 h-10 mr-1 mb-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer" key={index}>{item.size}</button>
                  ))
                }
                <h3 className="pb-2">WIDTH</h3>
                {
                  widths.map((item, index) => (
                    <button className="w-10 h-10 mr-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer" key={index}>{item}</button>
                  ))
                }
              </div>
              <div className="grid grid-cols-2 text-xl mb-8">
                <div className="">
                  <button className="w-10 h-10 mr-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer"
                    onClick={handleDesc} > -
                  </button>
                  <input onChange={(e)=> setQuantity(e.target.value) } className="text-center w-16 h-full outline-none" type="text" value={quantity} />
                  <button className="w-10 h-10 mr-1 hover:bg-primary rounded-sm bg-[#ccc] text-white cursor-pointer"
                    onClick={handleAsc} > +
                  </button>
                </div>
                <div>
                  <button className="flex flex-row items-center w-fit hover:bg-primary rounded-sm bg-secondary text-white px-3 py-2">
                    <div className="text-xl">
                      <FaShoppingCart />
                    </div>
                    <p className="mx-2 text-base">Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="text-justify mx-6 md:mx-0">
        <div className="grid grid-cols-3 gap-1 w-fit text-sm md:text-base text-black">
          <button onClick={()=>setContent(1)} className={`${content == 1 ? "bg-secondary text-white" : "bg-[#F2F2F2]"} hover:bg-secondary focus:bg-secondary hover:text-white focus:text-white rounded-sm px-3 py-2`}>
          Description
          </button>
          <button onClick={()=>setContent(2)} className={`${content == 2 ? "bg-secondary text-white" : "bg-[#F2F2F2]"} hover:bg-secondary focus:bg-secondary hover:text-white focus:text-white rounded-sm px-3 py-2`}>
          Manufacturer
          </button>
          <button onClick={()=>setContent(3)} className={`${content == 3 ? "bg-secondary text-white" : "bg-[#F2F2F2]"} hover:bg-secondary focus:bg-secondary hover:text-white focus:text-white rounded-sm px-3 py-2`}>
          Review
          </button>
        </div>
          {content == 1 && 
            <div className="w-full border border-[#dee2e6] mt-4 px-8 py-8">
              <h3 className="text-sm text-secondary pb-6">{data?.description}</h3>
            </div>
          }
          {content == 2 && 
            <div className="w-full border border-[#dee2e6] mt-4 px-8 py-8">
              <h3 className="text-sm text-secondary pb-6">Chưa có API Manufacturer</h3>
            </div>
          }
          {content == 3 && 
            <div className="w-full border border-[#dee2e6] mt-4 px-8 py-8">
              <h3 className="text-sm text-secondary pb-6">Chưa có API Review</h3>
            </div>
          }
      </div>
    </Container>
  );
}
