import Image from "next/dist/client/legacy/image";
import HeroImage from "../public/hero.webp";
import HeroImagejpeg from "../public/hero.jpg";
import {Logo} from "../components/Logo";
import Link from "next/link";
import {faBrain} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Home() {
	
  return (
  	<div className={"w-screen h-screen overflow-hidden flex justify-center items-center relative"}>
	   <Image src={HeroImagejpeg} alt="Hero" fill className={"absolute"} />
	   <div className={"absolute z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm"}>
		   <h3>Hamburg AI Center</h3>
		   <FontAwesomeIcon icon={faBrain} className={"text-8xl text-slate-400"} />
		   <p>
			   Generate SEO-optimized blog posts in minutes with our AI-powered SAAS solution.
			   Acquire high-quality content effortlessly, saving you valuable time.
		   </p>
		   <Link href={"/post/new"} className={"btn"}>Begin</Link>
	   </div>
    </div>
  );
}
