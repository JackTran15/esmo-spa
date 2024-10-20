'use client'
import React from 'react'
import Image from 'next/image'
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const schema = yup.object({
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    phone: yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại không hợp lệ"),
    date: yup.string().required("Vui lòng chọn ngày hẹn"),
    hour: yup.string().required("Vui lòng chọn giờ hẹn"),
    email: yup.string().email("Email không hợp lệ"),
});

export const ContactPage = () => {

    const form = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data) => {
        console.log('data: ', data)
    })

    return (
        <div className='container py-[64px] md:py-[96px] grid md:grid-cols-2 gap-[48px] lg:gap-[108px]'>
            <div className='w-full pt-[38px]'>
                <p className='text-title_3 font-semibold'>
                    Liên hệ đặt lịch
                </p>
                <p className='text-gray text-lg mt-[16px]'>
                    Hãy cho EmoSpa có cơ hội phục vụ bạn nhé!
                </p>
                <Form {...form}>
                    <form onSubmit={onSubmit} className='w-full mt-[48px]'>
                        <div className='w-full flex flex-col gap-[32px]'>
                            <div className='w-full grid sm:grid-cols-2 gap-[32px] sm:gap-[16px]'>
                                <FormField
                                name="fullname"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Họ & tên <span className='text-destructive'>*</span>
                                        </p>
                                            <Input
                                            type="text"
                                            className="text-md h-[40px] rounded-none bg-white"
                                            placeholder="Nhập họ & tên khách hàng"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />
                                <FormField
                                name="phone"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Số điện thoại <span className='text-destructive'>*</span>
                                        </p>
                                            <Input
                                            type="text"
                                            className="text-md h-[40px] rounded-none bg-white"
                                            placeholder="Nhập số điện thoại "
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />
                            </div>
                            <div className='w-full grid sm:grid-cols-2 gap-[32px] sm:gap-[16px]'>
                                <FormField
                                name="date"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Ngày hẹn <span className='text-destructive'>*</span>
                                        </p>
                                            <Input
                                            type="date"
                                            className="text-md h-[40px] rounded-none bg-white"
                                            placeholder="Chọn ngày hẹn"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />
                                <FormField
                                name="hour"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Giờ hẹn <span className='text-destructive'>*</span>
                                        </p>
                                            <Input
                                            type="time"
                                            className="text-md h-[40px] rounded-none bg-white"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />
                            </div>
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Ngày hẹn
                                        </p>
                                            <Input
                                            type="text"
                                            className="text-md h-[40px] rounded-none bg-white"
                                            placeholder="Email của bạn (nếu có)"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />

                            <FormField
                                name="note"
                                control={form.control}
                                render={({ field }) => (
                                <div className='w-full'>
                                    <div className='w-full flex flex-col gap-[8px]'>
                                        <p className='text-sm text-gray-4'>
                                            Lời nhắn
                                        </p>
                                        <Textarea
                                            rows={4}
                                            className="text-md rounded-none bg-white"
                                            placeholder="Bạn có muốn để lại lời nhắn gì cho EmoSpa không?"
                                            {...field}
                                        />
                                    </div>
                                    <FormMessage />
                                </div>
                                )}
                                />
                        </div>
                        <Button className="w-full mt-[32px]">
                            Gửi đến EmoSpa
                        </Button>
                    </form>
                </Form>
            </div>
            <div className='w-full h-[280px] sm:h-[400px] md:h-auto'>
                <Image 
                    src={'/assets/images/contact_banner.jpg'}
                    layout="responsive"
                    className='!w-full !h-full !object-cover'
                    width={10}
                    height={10}
                    alt={'Register news'}
                /> 
            </div>
        </div>
    )
}
