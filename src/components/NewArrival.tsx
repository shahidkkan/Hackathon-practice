import Heading from './Heading'
import Image from 'next/image'

const NewArrival = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[86%] mx-auto'>
                <Heading sub='Featured' title='New Arrivals' />
                <div className='flex justify-between md:flex-row flex-col gap-6 mt-16'>
                    <div className='relative bg-black flex justify-center items-end md:h-[600px] py-10 md:py-0 md:w-1/2'>
                        <Image src='/xbox.png' alt='iamge' width={450} height={430} />
                        <div className='absolute bottom-8 flex justify-start items-start flex-col gap-2 max-w-[50%]  left-10 text-white z-10'>
                            <span className='text-xl font-semibold'>PlayStation 5</span>
                            <p className='text-sm'>Black and White version of the PS5 coming out on sale.</p>
                            <button className='underline'>Shop Now</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <div className='relative h-[284px] bg-black flex justify-end items-center '>
                            <Image src='/women.png' alt='iamge' width={430} height={430} />
                            <div className='absolute bottom-8 flex justify-start items-start flex-col gap-2 max-w-[40%]  left-6 text-white z-10'>
                                <span className='text-xl font-semibold'>Women’s Collections</span>
                                <p className='text-sm'>Featured woman collections that give you another vibe.</p>
                                <button className='underline'>Shop Now</button>
                            </div>
                        </div>
                        <div className='flex gap-6 md:flex-row flex-col'>
                            <div className='relative h-[292px] bg-black flex justify-center items-center md:w-[270px]'>
                                <Image src='/sound.png' alt='iamge' width={180} height={200} />
                                <div className='absolute bottom-4 flex justify-start items-start flex-col gap-2 left-6 text-white z-10'>
                                    <span className='text-xl font-semibold'>Speakers</span>
                                    <p className='text-sm'>Amazon wireless speakers</p>
                                    <button className='underline'>Shop Now</button>
                                </div>
                            </div>
                            <div className='relative h-[292px] bg-black flex justify-center items-center md:w-[270px]'>
                                <Image src='/perfume.png' alt='iamge' width={180} height={180} />
                                <div className='absolute bottom-4 flex justify-start items-start flex-col gap-2 left-6 text-white z-10'>
                                    <span className='text-xl font-semibold'>Perfume</span>
                                    <p className='text-sm'>GUCCI INTENSE OUD EDP</p>
                                    <button className='underline'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrival