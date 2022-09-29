export function Category() {
  const brands = ["Nike", "Adidas", "Merel", "Gucci", "Skechers"];

  const sizes = [
    "7", "7.5",
    "8", "8.5",
    "9", "9.5",
    "10", "10.5",
    "11", "11.5",
    "12", "12.5",
    "13", "13.5",
    "14",
  ];

  const widths = ["M", "W"];

  const styles = ["Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"];

  const colors = ["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"];

  return (
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
    </div>
  );
}
