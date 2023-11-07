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
    <footer className="mt-36 flex flex-col items-center w-full h-screen">
      <div className="w-full lg:w-[1110px] lg:pb-24 flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-72">
        <Card height="h-[340px]">
          <Image
            src="/assets/image-best-gear.jpg"
            alt="best gear"
            width={320}
            height={250}
            className="rounded-lg md:w-[680px] md:h-[340px] lg:w-[450px] lg:h-[600px]"
          />
        </Card>
        <aside className="lg:w-[1000px] lg:h-auto flex flex-col justify-center items-center">
          <h2 className="lg:mt-0 lg:pt-16 font-bold tracking-[1px] uppercase text-black text-[28px] text-center w-[80%] mt-20 md:pt-24 lg:text-[40px] lg:tracking-[1.42px] lg:text-left lg:w-full">
            bringing you the <span className="text-dark-orange">best</span>
            audio gear
          </h2>
          <p className="tex-[15px] flex font-medium leading-6 opacity-50 text-black w-[90%] lg:w-full  text-center lg:text-left pt-5">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </aside>
      </div>
      <div className="w-full min-h-[680px] max-h-full bg-black-custom flex flex-col mt-32 items-center lg:min-h-[365px] xl:min-h-[420px] lg:px-[167px]">
        <div className="md:w-full md:items-center md:justify-center md:pl-[40px]">
          <hr className="w-[101px]   border-[2px] border-dark-orange" />
        </div>
        <div className="pt-[52px] flex flex-col items-center md:items-start md:ml-[39px] justify-center">
          <div className="lg:w-full flex flex-col lg:flex-row justify-between">
            <div className="w-full h-full flex justify-center items-center md:justify-start lg:w-auto">
              <LogoIcon />
            </div>
            <nav className="w-full text-white flex flex-col md:items-start items-center  justify-center pt-[48px] uppercase tracking-[2px] text-[13px] leading-6 lg:flex-row lg:pt-0 lg:w-auto ">
              <Link
                href="/"
                className="link link-hover hover:text-dark-orange hover:no-underline  p-2 "
              >
                home
              </Link>
              <Link
                href="/categories/headphones"
                className="link link-hover hover:text-dark-orange hover:no-underline  p-2"
              >
                headphones
              </Link>
              <Link
                href="/categories/speakers"
                className="link link-hover hover:text-dark-orange hover:no-underline  p-2"
              >
                speakers
              </Link>
              <Link
                href="/categories/earphones"
                className="link link-hover hover:text-dark-orange hover:no-underline  p-2"
              >
                earphones
              </Link>
            </nav>
          </div>
          <div className="flex text-center lg:w-[60%] text-white opacity-50 pt-[48px] w-[100%] items-center justifty-center md:text-justify md:pr-[32px] md:p-0 md:pt-5 p-6 lg:pt-[36px]">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center md:flex-row md:pt-[120px] lg:pt-0">
            <aside className="pt-[48px] md:p-0 w-full lg:pt-[60px] xl:pt-[100px]">
              <p className="text-[15px] leading-[25px] opacity-50 text-white text-center md:text-left">
                Copyright © 2023 . All right reserved
              </p>
            </aside>
            <nav className="w-full flex  items-center justify-center md:justify-end  md:p-0 md:pr-[40px] h-full gap-4 p-9">
              <Link href="https://www.facebook.com/" target="_blank">
                <GrFacebook color="#FFFFFF" size="30" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="lg:hover:fill-dark-orange"
              >
                <RiTwitterXFill size="30" color="#FFFFFF" />
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
