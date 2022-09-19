/* eslint-disable @next/next/no-img-element */
export function Gender() {
  const content = [
    {
      image: "men.jpg",
      title: "Shop Men's Collection"
    },
    {
      image: "women.jpg",
      title: "Shop Women's Collection"
    }
  ];
  return (
    <div className="pb-24 mx-4 xl:mx-0">
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-evenly">
      {content.map((item) => (
        <div className="w-full px-[14px] py-[28px]">
          <img src={`/images/type/${item.image}`} alt="" className="w-full mb-5" />
          <p className="text-center text-4xl font-normal">{item.title}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
