import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';
const Members = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[86%] mx-auto'>
                <div className='flex justify-between items-center gap-10 md:flex-row flex-col'>
                    {
                        Array.from({ length: 3 }).map((_, index: number) => (
                            <div key={index} className='md:w-[33.33%] w-full flex flex-col gap-4'>
                                <div className="bg-[#F5F5F5] h-[400px] flex items-end">
                                    <Image src='/person.png' alt='image' width={230} height={230} className="mx-auto" />
                                </div>
                                <span className="text-2xl font-semibold">Tom Cruise</span>
                                <p className="text-xs">Founder & Chairman</p>
                                <div className="flex gap-2">
                                    <TwitterIcon />
                                    <TwitterIcon />
                                    <TwitterIcon />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Members