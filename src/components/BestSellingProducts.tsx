'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import StarRatings from 'react-star-ratings'

const BestSellingProducts = () => {
    return (
        <section className='relative my-20'>
            <div className='max-w-[86%] mx-auto'>
                <Heading sub='This Month' title='Best Selling Products' button={true} />
                <div className='mt-10 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10'>
                    {
                        Array.from({ length: 4 }).map((_, ind: number) => {
                            return (
                                <div className='col-span-1' key={ind}>
                                    <div className='next'></div>
                                    <div className='before'></div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='bg-[#F5F5F5] flex justify-center items-center h-[250px]' >
                                            <Image src='/shirt.png' alt='img' width={130} height={100} />
                                        </div>
                                        <div className='flex flex-col gap-2 justify-start'>
                                            <h4 className='text-base'>HAVIT HV-G92 Gamepad</h4>
                                            <span className='text-sm text-[#DB4444]'>$120</span>
                                            <StarRatings
                                                rating={4}
                                                starRatedColor="orange"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="2px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSellingProducts