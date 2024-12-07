'use client'
import React from 'react'
import Heading from './Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
const BrowseCategory = () => {
    return (
        <section className='relative my-20'>
            <div className='max-w-[86%] mx-auto'>
                <Heading sub='Categories' title='Browse By Category' />
                <Swiper
                    className='mt-10'
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 5
                        },
                    }}
                    slidesPerView={5}
                >
                    {
                        Array.from({ length: 6 }).map((_, ind: number) => {
                            return (
                                <SwiperSlide key={ind} className='max-w-[270px] '>
                                    <div className='w-[170px] h-[145px] border border-gray-400 flex flex-col justify-center items-center gap-4'>
                                        <Image src='/Vector2.png' alt='img' width={20} height={20} />
                                        <span>Phones</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default BrowseCategory