import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-32 gap-10 py-14 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex w-1/2 items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <div className="flex flex-col text-sm space-y-2">
              <Link className="hover:underline transition" href="#">
                Home
              </Link>
              <Link className="hover:underline transition" href="#">
                About us
              </Link>
              <Link className="hover:underline transition" href="#">
                Contact us
              </Link>
              <Link className="hover:underline transition" href="#">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+65-1234-5678</p>
              <p>contact@quickcart.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 ">
        <p className="py-4 text-center text-xs md:text-sm">
          Copyright 2026 © QuickCart Pte Ltd All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
