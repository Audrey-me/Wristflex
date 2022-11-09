import React from "react";


const Filter = () => {
  return (
    <div className="w-[17.5rem] border-separate hidden lg:inline-block  border-spacing-4 border">
      <div className="bg-accent/20">
        <tr>
          <th className="font-[100] text-[16px]">Filter By</th>
        </tr>
      </div>
      <div className="px-4 py-2 leading-9 border-b">
        <p className="text-[14.4px]">Availability</p>
        <div className="flex gap-4 text-accent/90 text-[13px]">
          <input type="checkbox" className="w-4" />
          <p>In Stock (16)</p>
        </div>
        <div className="flex gap-4 text-accent/90 text-[13px]">
          <input type="checkbox" className="w-4 " />
          <p>Out Of Stock (5)</p>
        </div>
      </div>

      <div className="px-4 py-2 leading-9 border-b">
        <p>Price</p>
        <div className="flex gap-2 mb-2">
          <span className="text-[18px]">$</span><input type="text" placeholder="From" className="w-20 border-accent border rounded-full py-1" />
          <span className="text-[18px]">$</span><input type="text" placeholder="To" className="w-20 border-accent border rounded-full py-1 " />
        </div>
      </div>

      <div className="px-4 py-2 leading-7 border-b">
        <p className="text-[14.4px]">Size</p>
        <div className="flex gap-4 text-accent text-[13px]">
          <input type="checkbox" className="w-4" />
          <p>S (8)</p>
        </div>
        <div className="flex gap-4 text-accent text-[13px]">
          <input type="checkbox" className="w-4 " />
          <p>M (8)</p>
        </div>
        <div className="flex gap-4 text-accent text-[13px]">
          <input type="checkbox" className="w-4 " />
          <p>L (8)</p>
        </div>
      </div>

    </div>
  );
};

export default Filter;
