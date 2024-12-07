import Image from 'next/image'
import { Button } from './ui/button'

const MusicExperience = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[86%] mx-auto'>
                <div className='flex justify-between gap-14 md:gap-0 items-center py-10 px-6 md:p-14 md:flex-row flex-col bg-black text-white'>
                    <div className='md:max-w-[40%] flex justify-start items-start flex-col gap-6'>
                        <span className='text-xs text-[#00FF66]'>Categories</span>
                        <h3 className='md:text-5xl text-3xl'>Enhance Your Music Experience</h3>
                        <div className='flex gap-4 items-center text-black flex-wrap'>
                            <div className='flex flex-col  bg-white rounded-full  h-16 w-16 items-center justify-center'>
                                <span className='text-xs'>Days</span>
                                <span className='md:text-xl font-semibold'>03</span>
                            </div>
                            <div className='flex flex-col bg-white rounded-full h-16 w-16 items-center justify-center'>
                                <span className='text-xs'>hours</span>
                                <span className='md:text-xl font-semibold'>03</span>
                            </div>
                            <div className='flex flex-col bg-white rounded-full h-16 w-16 items-center justify-center'>
                                <span className='text-xs'>Mintues</span>
                                <span className='md:text-xl font-semibold'>03</span>
                            </div>
                            <div className='flex flex-col bg-white rounded-full h-16 w-16 items-center justify-center'>
                                <span className='text-xs'>Seconds</span>
                                <span className='md:text-xl font-semibold'>03</span>
                            </div>
                        </div>
                        <div>
                            <Button size={'lg'} variant={'secondary'} className='bg-[#00FF66]' >By Now</Button>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <Image src='/new2.png' alt='image' width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MusicExperience