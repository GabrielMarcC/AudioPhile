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
      <Card height="h-[350px]">
        <Image
          src="/assets/image-best-gear.jpg"
          alt="best gear"
          width={320}
          height={250}
          className="rounded-lg"
        />
      </Card>
      <h2 className="font-bold tracking-[1px] uppercase text-black text-[28px] text-center w-[80%] pt-5">
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
      <div className="w-full h-[650px] bg-black-custom flex flex-col mt-32 items-center">
        <hr className="w-[101px]   border-[2px] border-dark-orange" />
        <div className="pt-[52px] flex flex-col items-center justify-center">
          <LogoIcon />
          <nav className="w-full text-white flex flex-col items-center justify-center pt-[48px] uppercase tracking-[2px] text-[13px] leading-6">
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
          <div className="flex text-center text-white opacity-50 pt-[48px] w-[100%] items-center justifty-center p-6">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <aside className="pt-[48px]">
            <p className="text-[15px] leading-[25px] opacity-50 text-white text-center">
              Copyright © 2023 . All right reserved
            </p>
          </aside>
          <nav className="w-full flex  items-center justify-center gap-4 p-9">
            <Link href="https://www.facebook.com/" target="_blank">
              <GrFacebook color="#FFFFFF" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <RiTwitterXFill color="#FFFFFF" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <BsInstagram color="#FFFFFF" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
