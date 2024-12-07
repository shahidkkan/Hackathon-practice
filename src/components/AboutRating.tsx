import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const AboutRating = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[86%] mx-auto'>
                <div className='flex items-center gap-10 md:flex-row flex-col'>
                    {
                        Array.from({ length: 4 }).map((_, index: number) => (
                            <div key={index} className='border border-black py-8 md:w-[25%] w-full flex flex-col gap-2 items-center'>
                                <MonetizationOnIcon className='text-5xl' />
                                <span className='text-3xl font-semibold'>33k</span>
                                <p className='text-xs'>Mopnthly Produduct Sale</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutRating