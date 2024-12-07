import Image from 'next/image'
const AboutBanner = () => {
    return (
        <section className='lg:mt-24 mt-16 mb-20 relative '>
            <div className='max-w-[86%] mx-auto'>
                <div className='flex justify-between items-center gap-8 lg:gap-0 lg:flex-row flex-col'>
                    <div className='lg:max-w-[40%] flex flex-col gap-8'>
                        <h1 className='text-5xl font-semibold'>Our Story</h1>
                        <p className='text-sm'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <span className='text-sm'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</span>
                    </div>
                    <div className='lg:w-[705px] lg:h-[609px]'>
                        <Image src='/aboutbanner.png' alt='image' width={600} height={600} className='lg:absolute top-0 right-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner