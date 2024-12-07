'use client'
import React from 'react'
import Heading from './Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import StarRatings from 'react-star-ratings';
import { Button } from './ui/button';
const FlashSales = () => {
    return (
        <section className='my-28 relative'>
            <div className='max-w-[86%] mx-auto'>
                <Heading timer={true} sub='Today’s' title='Flash Sales' />
                <Swiper
                    className='mt-10'
                    spaceBetween={30}
                >
                    {
                        Array.from({ length: 10 }).map((_, ind: number) => {
                            return (
                                <SwiperSlide key={ind} className='max-w-[270px] '>
                                    <div className='next'></div>
                                    <div className='before'></div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='bg-[#F5F5F5] flex justify-center items-center h-[250px]' >
                                            <Image src='/game.png' alt='img' width={130} height={100} />
                                        </div>
                                        <div className='flex flex-col gap-2 justify-start'>
                                            <h4 className='text-base'>HAVIT HV-G92 Gamepad</h4>
                                            <span className='text-sm text-[#DB4444]'>$120</span>
                                            <StarRatings
                                                rating={4}
                                                starRatedColor='orange'
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="2px"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='text-center mt-20'>
                    <Button size={'lg'} variant={'secondary'}>View All Products</Button>
                </div>
            </div>
        </section >
    )
}

export default FlashSales