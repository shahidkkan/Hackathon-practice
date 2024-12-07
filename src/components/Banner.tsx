import Image from 'next/image'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Banner = () => {
    return (
        <section className='relative'>
            <div className='max-w-[90%] mx-auto'>
                <div className='grid lg:grid-cols-6 '>
                    <div className='relative lg:flex hidden justify-start items-start col-span-1 after:lg:contents-[""] after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gray-300 after:lg:absolute'>
                        <ul className='flex gap-3 flex-col mt-6'>
                            <li className='flex justify-between items-center gap-3'>Woman’s Fashion
                                <ChevronRightIcon />
                            </li>
                            <li className='flex justify-between items-center gap-3'>Men’s Fashion
                                <ChevronRightIcon />
                            </li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby’s & Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </div>
                    <div className='col-span-5 lg:max-w-[90%] mx-auto'>
                        <div className='flex justify-between gap-8 md:gap-0 items-center py-2 md:flex-row flex-col mt-12 text-white bg-black lg:w-full w-full'>
                            <div className='md:max-w-[30%] max-w-[90%] mx-auto flex justify-center items-start flex-col gap-6 mt-6 md:mt-0'>
                                <div className='flex gap-6 items-center'>
                                    <Image src='/apple.png' alt='image' width={30} height={30} />
                                    <span>iPhone 14 Series</span>
                                </div>
                                <h1 className='text-5xl leading-12'>Up to 10% off Voucher</h1>
                                <button className="underline">Shop Now</button>
                            </div>
                            <div>
                                <Image src='/banner.png' alt='imag' width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner