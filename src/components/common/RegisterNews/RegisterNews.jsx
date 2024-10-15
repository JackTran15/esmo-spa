'use client'

import Image from 'next/image'
import React from 'react'
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { Button } from '@/components/ui/button';

const schema = yup.object({
    phone: yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại không hợp lệ"),
});

export const RegisterNews = () => {

    const form = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data) => {
        console.log('data: ', data)
    })

    return (
        <div className='w-full bg-white grid md:grid-cols-2'>
            <div className='w-full px-[24px] py-[32px] md:py-[64px] md:pl-[48px] pr-[27px] order-2 md:order-1'>
                <p className='text-title_4 font-semibold text-center md:text-left'>
                    Hãy cho EmoSpa có cơ hội mang đến bạn trải nghiệm tốt nhất nhé!
                </p>
                <p className='text-gray text-lg mt-[16px] text-center md:text-left'>
                Gửi cho chúng tôi số điện thoại của bạn, EmoSpa sẽ liên hệ tư vấn cho bạn dịch vụ tốt nhất dành riêng cho bạn.
                </p>

                <div className='w-full mt-[32px]'>
                    <Form {...form}>
                        <form onSubmit={onSubmit} className='w-full flex flex-col md:flex-row justify-between gap-[16px]'>
                            <FormField
                                name="phone"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full bg-brown h-[48px] relative'>
                                        <div className='w-[20px] h-[20px] flex absolute left-[14px] top-[14px]'>
                                            <Image 
                                                src={'/assets/icons/ic_phone.svg'}
                                                layout="responsive"
                                                className='!w-full !h-full !object-cover object-bottom'
                                                width={10}
                                                height={10}
                                                alt={'Register news'}
                                            /> 
                                        </div>
                                        <Input
                                            type="text"
                                            className="h-full !border-none pl-[45px] rounded-none text-md"
                                            placeholder="Nhập số điện thoại của bạn"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                            />

                            <Button type="submit" className="shrink-0" >
                                Gửi
                            </Button>
                        </form>
                    </Form>
                </div>
             
            </div>
            <div className='w-full h-fll min-h-[368px] order-1 md:order-2'>
                <Image 
                    src={'/assets/images/register_news_banner.jpg'}
                    layout="responsive"
                    className='!w-full !h-full !object-cover object-right'
                    width={10}
                    height={10}
                    alt={'Thumbnail'}
                /> 
            </div>
        </div>
    )
}
