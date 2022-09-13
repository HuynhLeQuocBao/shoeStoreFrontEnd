/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/common/index";

export function FooterItem({ title, images = [] }) {
  return (
    <div className="items-center text-center inline-flex flex-col">
      <h4 className="font-SamsungInterFace font-normal text-xs md:text-2xl mb-3 md:mb-6">
        {title}
      </h4>

      <div className="flex space-x-8">
        {images.map((image) => (
          <div
            key={image}
            className="w-10 h-10 md:w-40 md:h-40 relative flex items-center justify-center"
          >
            <img src={`/images/logo/${image}`} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const items = [
    {
      title: "Đơn vị hợp tác",
      images: ["cspace.png", "uah.png"],
    },
    {
      title: "Đơn vị truyền thông",
      images: ["elle-decor.jpg"],
    },
  ];

  return (
    <footer className="py-5">
      <Container>
        <div className="flex flex-col md:flex-row md:space-x-28 justify-center gap-2 md:gap-0">
          {items.map((item) => (
            <FooterItem
              key={item.title}
              title={item.title}
              images={item.images}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
