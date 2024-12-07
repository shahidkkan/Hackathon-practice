import Image from 'next/image'
const Footer = () => {
    return (
        <footer className='bg-black py-20'>
            <div className='max-w-[88%] mx-auto'>
                <div className='flex justify-between items-start gap-8 md:flex-row flex-col text-white'>
                    <div className='flex flex-col gap-4 md:w-[20%]'>
                        <h2 className='text-2xl font-semibold'>Exclusive</h2>
                        <span className='text-sm'>Subscribe</span>
                        <p className='text-xs'>Get 10% off your first order</p>
                        <input type="text" className='bg-transparent border border-gray-400 py-2 px-4 w-full placeholder:text-gray-400' placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-4 md:w-[20%]'>
                        <h3 className='text-2xl font-semibold'>Support</h3>
                        <p className='text-sm max-w-[80%]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <span className='text-xs'>exclusive@gmail.com</span>
                        <span className='text-xs'>+88015-88888-9999</span>
                    </div>
                    <div className='flex flex-col gap-4 md:w-[20%]'>
                        <h3 className='text-2xl font-semibold'>Account</h3>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li>My Account</li>
                            <li>Rigister/ Login</li>
                            <li>Cart</li>
                            <li>WishList</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 md:w-[20%]'>
                        <h3 className='text-2xl font-semibold'>Quick Link</h3>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 md:w-[20%]'>
                        <h3 className='text-2xl font-semibold'>Download App</h3>
                        <span className='text-xs'>Save $3 with App New User Only</span>
                        <div className='flex gap-4 items-center'>
                            <Image src='/Qr.png' alt='img' width={100} height={100} />
                            <div className='flex flex-col gap-4'>
                                <Image src='/Google.png' alt='img' width={120} height={120} />
                                <Image src='/App.png' alt='img' width={120} height={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer