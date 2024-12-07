import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Customer = () => {
    return (
        <section className='my-28'>
            <div className='lg:max-w-[70%] max-w-[85%] mx-auto'>
                <div className='flex justify-between items-center md:flex-row flex-col gap-10 md:gap-0'>
                    <div className='flex justify-center items-center gap-2 flex-col'>
                        <AirportShuttleIcon className='text-5xl bg-gray-200 rounded-full p-2' />
                        <h6 className='text-base font-semibold'>FREE AND FAST DELIVERY</h6>
                        <span className='text-xs'>Free delivery for all orders over $140</span>
                    </div>
                    <div className='flex justify-center items-center gap-2 flex-col'>
                        <AirportShuttleIcon className='text-5xl bg-gray-200 rounded-full p-2' />
                        <h6 className='text-base font-semibold'>FREE AND FAST DELIVERY</h6>
                        <span className='text-xs'>Free delivery for all orders over $140</span>
                    </div>
                    <div className='flex justify-center items-center gap-2 flex-col'>
                        <AirportShuttleIcon className='text-5xl bg-gray-200 rounded-full p-2' />
                        <h6 className='text-base font-semibold'>FREE AND FAST DELIVERY</h6>
                        <span className='text-xs'>Free delivery for all orders over $140</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer