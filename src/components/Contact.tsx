import Image from "next/image"
import { Button } from "./ui/button"

const Contact = () => {
    return (
        <section className='my-20'>
            <div className="max-w-[86%] mx-auto">
                <div className="flex justify-between items-center gap-10 lg:flex-row flex-col">
                    <div className="lg:w-[30%] shadow-2xl w-full">
                        <div className="flex flex-col gap-5 p-8">
                            <div className="flex gap-4">
                                <Image src="/call.png" alt="image" width={30} height={30} />
                                <span className="text-xl font-semibold">Call To Us</span>
                            </div>
                            <p className="text-sm">We are available 24/7, 7 days a week.</p>
                            <p className="text-sm">Phone: +8801611112222</p>
                            <hr className="border-gray-400 my-5" />
                            <div className="flex gap-4">
                                <Image src="/mail.png" alt="image" width={30} height={30} />
                                <span className="text-xl font-semibold">Write To US</span>
                            </div>
                            <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-sm">Emails: customer@exclusive.com</p>
                            <p className="text-sm">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                    <div className="lg:w-[70%] w-full shadow-2xl p-8">
                        <div className="flex items-center gap-6 lg:flex-row flex-col">
                            <input type="text" placeholder="Name" className="bg-[#F5F5F5] py-2 px-4 w-full" />
                            <input type="text" placeholder="Name" className="bg-[#F5F5F5] py-2 px-4 w-full" />
                            <input type="text" placeholder="Name" className="bg-[#F5F5F5] py-2 px-4 w-full" />
                        </div>
                        <textarea placeholder="Message" className="bg-[#F5F5F5] py-2 h-[207px] px-4 w-full mt-6 resize-none"/>
                        <div className="text-end mt-10">
                            <Button size={'lg'} variant={'secondary'}>Send Message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact