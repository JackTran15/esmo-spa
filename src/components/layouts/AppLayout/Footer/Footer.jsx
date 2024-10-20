import { LogoApp } from '@/components/common/LogoApp/LogoApp'
import Link from 'next/link'
import React from 'react'
import { FBPreview } from './FBPreview/FBPreview'
import Image from 'next/image'
export const Footer = () => {

  const footerLinks = [
    {
      title: "Về Emospa",
      link: "/about"
    },
    {
      title: "Dịch vụ",
      link: "/services"
    },
    {
      title: "Hệ thống Emospa",
      link: "/location"
    },
    {
      title: "Tin tức & Khuyến mãi",
      link: "/news"
    },
    {
      title: "Liên hệ",
      link: "/contact"
    }
  ]

  const socialLinks = [
    {
      icon: '/assets/icons/ic_social_x.svg',
      link: '#!'
    },
    {
      icon: '/assets/icons/ic_social_fb.svg',
      link: '#!'
    },
    {
      icon: '/assets/icons/ic_social_ig.svg',
      link: '#!'
    }
  ]

  return (
    <div className='w-full'>
      <div className='bg-brown'>
        <div className='container py-[32px] flex flex-col md:flex-row flex-wrap justify-center gap-[40px]'>
          {
            footerLinks.map((link, index) => (
              <Link href={link.link} key={index}>
                <div className='text-lg font-medium hover:text-primary text-center'>
                  {link.title}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className='bg-brown-2'>
          <div className='container pt-[48px] pb-[64px]'>
            <div className='w-full relative flex flex-col md:flex-row gap-[32px] md:min-h-[250px]'>
              <div className='w-full'>
                <LogoApp height={48} />
              </div>
              <FBPreview />
              <div className='md:absolute md:bottom-0 md:left-0'>
                <div className='flex gap-[16px] items-center pr-[60px] pb-[24px] border-b border-background'>
                  {
                    socialLinks.map((link, index) => (
                      <Link href={link.link} key={index}>
                        <div className='w-[64px] h-[64px] rounded-full bg-brown flex justify-center items-center'>
                          <Image 
                              src={link.icon}
                              width={32}
                              height={32}
                              alt={'Icon Social'}
                            /> 
                          </div>
                      </Link>
                    ))
                  }
                </div>
                <p className='mt-[24px] text-md text-gray'>
                © 2024 EmoSpa edited
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
