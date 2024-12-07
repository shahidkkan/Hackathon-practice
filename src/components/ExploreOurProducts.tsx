'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import StarRatings from 'react-star-ratings'
import { Button } from './ui/button'

const ExploreOurProducts = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[86%] mx-auto'>
                <Heading sub='Our Products' title='Explore Our Products' />
                <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid-rows-2  gap-10 mt-10'>
                    {
                        Array.from({ length: 8 }).map((_, ind: number) => {
                            return (
                                <div className='col-span-1' key={ind}>
                                    <div className='next'></div>
                                    <div className='before'></div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='bg-[#F5F5F5] flex justify-center items-center h-[250px]' >
                                            <Image src='/laptop.png' alt='img' width={130} height={100} />
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
                <div className='text-center mt-14'>
                    <Button variant={'secondary'} size={'lg'} >View All Products</Button>
                </div>
            </div>
        </section>
    )
}

export default ExploreOurProducts