import { assets } from '@/assets/assets';
import earphoneImage from '@/assets/apple_earphone_image.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-0.5 max-w-[200px] cursor-pointer">
      <div className="group relative bg-gray-500/10 w-full h-52 rounded-lg flex items-center justify-center">
        <Image
          className="group-hover:scale-105 object-cover transition w-4/5 h-4/5 md:w-full md:h-full"
          src={earphoneImage}
          width={800}
          height={800}
          alt="test"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
          <Image className="w-3 h-3" src={assets.heart_icon} alt=""></Image>
        </button>
      </div>

      <h3 className="font-medium pt-2 truncate">Apple AirPods Pro 2nd gen</h3>
      <p className="text-xs text-gray-500/70 max-sm:hidden truncate">
        Apple AirPods Pro (2nd Gen) with MagSafe
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs">4.5</p>
        <div className="flex items-center gap-0.5">
          <Image className="w-3 h-3" src={assets.star_icon} alt="star-icon" />
          <Image className="w-3 h-3" src={assets.star_icon} alt="star-icon" />
          <Image className="w-3 h-3" src={assets.star_icon} alt="star-icon" />
          <Image className="w-3 h-3" src={assets.star_icon} alt="star-icon" />
          <Image
            className="w-3 h-3"
            src={assets.star_dull_icon}
            alt="star-icon"
          />
        </div>
      </div>

      <div className="flex justify-between items-end mt-1">
        <h3 className="font-medium">$399.99</h3>
        <button className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
