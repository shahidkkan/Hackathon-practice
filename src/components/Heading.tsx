import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Button } from './ui/button';
const Heading = ({ sub, title, timer, button }: { sub: string, title: string, timer?: boolean, button?: boolean }) => {
    return (
        <div className='flex flex-col gap-4 relative'>
            <span className='text-[#DB4444] text-xs before:absolute before:contents-[""] before:left-0 before:w-3 before:rounded-sm before:h-4 before:bg-[#DB4444] ml-5'>{sub}</span>
            <div className={` ${timer ? 'hidden' : 'flex'}  justify-between md:items-center gap-6 md:gap-0 md:flex-row flex-col`}>
                <h2 className={`  text-4xl font-semibold`}>{title}</h2>
                {
                    button ?
                        <div>
                            <Button size={'lg'} variant={'secondary'}>View All</Button>
                        </div>
                        :
                        <div className='flex gap-1 items-center'>
                            <ArrowCircleLeftIcon className='text-4xl text-gray-600' />
                            <ArrowCircleRightIcon className='text-4xl text-gray-600' />
                        </div>
                }
            </div>
            {
                timer &&
                <div className='flex md:flex-row flex-col md:items-center justify-between gap-6'>
                    <div className='flex md:gap-20  md:items-end md:flex-row flex-col gap-6'>
                        <h2 className="text-4xl font-semibold">{title}</h2>
                        <div className='flex gap-2 items-center'>
                            <div className='flex flex-col gap-1 '>
                                <span className='text-xs'>Days</span>
                                <span className='text-4xl font-semibold'>03 :</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-xs'>Hours</span>
                                <span className='text-4xl font-semibold'>23 :</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-xs'>Minutes</span>
                                <span className='text-4xl font-semibold'>19 :  </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-xs'>Seconds</span>
                                <span className='text-4xl font-semibold'>56</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <ArrowCircleLeftIcon className='text-4xl text-gray-600' />
                        <ArrowCircleRightIcon className='text-4xl text-gray-600' />
                    </div>
                </div>
            }
        </div>
    )
}

export default Heading