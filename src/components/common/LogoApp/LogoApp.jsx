import React from 'react'
import Link from "next/link";
import Logo from "@/images/logo.png";
import Image from 'next/image';


export const LogoApp = ({ height = 40 }) => {
  return (
    <Link href="/">
        <Image src={Logo} alt="logo" height={height} />
    </Link>
  )
}
