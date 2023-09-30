/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Card } from "../Home/ui/Card";
import { LogoIcon } from "@/icons/logo-icon";
import { GrFacebook } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-14 flex flex-col items-center w-full h-screen">
      <Card height="h-[300px]">
        <Image
          src="/assets/image-best-gear.jpg"
          alt="best gear"
          width={320}
          height={250}
          className="rounded-lg md:w-[680px] md:h-[340px]"
        />
      </Card>
      <h2 className="font-bold tracking-[1px] uppercase text-black text-[28px] text-center w-[80%] pt-5 md:pt-24">
        bringing you the <span className="text-dark-orange">best</span> audio
        gear
      </h2>
      <p className="tex-[15px] font-medium leading-6 opacity-50 text-black w-[90%] text-center pt-5">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
      <div className="w-full min-h-[680px]    max-h-full bg-black-custom flex flex-col mt-32 items-center">
        <div className="md:w-full md:items-center md:justify-center md:pl-[40px]">
          <hr className="w-[101px]   border-[2px] border-dark-orange" />
        </div>
        <div className="pt-[52px] flex flex-col items-center md:items-start md:ml-[39px] justify-center">
          <div className="w-full h-full flex justify-center md:justify-start">
            <LogoIcon />
          </div>
          <nav className="w-full text-white flex flex-col md:items-start items-center justify-center pt-[48px] uppercase tracking-[2px] text-[13px] leading-6">
            <Link href="/" className="link link-hover p-2">
              home
            </Link>
            <Link href="/" className="link link-hover p-2">
              headphones
            </Link>
            <Link href="/" className="link link-hover p-2">
              speakers
            </Link>
            <Link href="/" className="link link-hover p-2">
              earphones
            </Link>
          </nav>
          <div className="flex text-center text-white opacity-50 pt-[48px] w-[100%] items-center justifty-center md:text-justify md:pr-[32px] md:p-0 md:pt-5 p-6">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center md:flex-row md:pt-[120px]">
            <aside className="pt-[48px] md:p-0 w-full">
              <p className="text-[15px] leading-[25px] opacity-50 text-white text-center md:text-left">
                Copyright © 2023 . All right reserved
              </p>
            </aside>
            <nav className="w-full flex  items-center justify-center md:justify-end  md:p-0 md:pr-[40px] h-full gap-4 p-9">
              <Link href="https://www.facebook.com/" target="_blank">
                <GrFacebook color="#FFFFFF" size="30" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <RiTwitterXFill color="#FFFFFF" size="30" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <BsInstagram color="#FFFFFF" size="30" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
