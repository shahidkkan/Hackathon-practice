import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const Signup = () => {
    return (
        <section className="my-20 relative md:h-screen">
            <div className="max-w-[86%] mx-auto">
                <div className="flex justify-center items-center md:flex-row flex-col h-full">
                    <div className="w-1/2 lg:block hidden h-[526px]">
                        <Image src="/signuppic.png" alt="image" width={600} height={600} className="absolute top-0 left-0" />
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <h4 className="text-4xl font-semibold">Create an account</h4>
                        <p className="text-sm mt-4 mb-8">Enter your details below</p>
                        <div className="flex flex-col gap-8">
                            <input type="text" className="border-b border-gray-400 py-2 px-2 w-full" placeholder="Name" />
                            <input type="text" className="border-b border-gray-400 py-2 px-2 w-full" placeholder="Name" />
                            <input type="text" className="border-b border-gray-400 py-2 px-2 w-full" placeholder="Name" />
                        </div>
                        <div className="flex flex-col">
                            <Button size={'lg'} variant={'secondary'} className="mt-8 w-full">Sign Up</Button>
                            <Button size={'lg'} variant={'secondary'} className="mt-8 w-full bg-trasparent border border-black text-black">Sign Up with Google</Button>
                        </div>
                        <p className="mt-4 text-center text-sm">Already have an account? <Link href={'/login'} className="underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup