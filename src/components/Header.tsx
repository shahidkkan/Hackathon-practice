'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='relative z-10 after:contents-[""] after:bottom-0  after:w-full after:h-[1px] after:bg-gray-300 after:lg:absolute'>
            <div className='lg:block hidden py-2 bg-black'>
                <div className='flex max-w-[86%] mx-auto justify-between items-center'>
                    <div className='flex gap-4 text-white ml-40 items-center'>
                        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <Link href='/'><button className='underline'>ShopNow</button></Link>
                    </div>
                    <div className='text-white'>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Urdu</SelectItem>
                                <SelectItem value="dark">Hindi</SelectItem>
                                <SelectItem value="system">Chiness</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className='max-w-[90%] mx-auto py-4 lg:block hidden'>
                <div className='flex justify-between items-center text-black'>
                    <div>
                        <span className='font-bold text-2xl'>Exclusive</span>
                    </div>
                    <div>
                        <ul className='flex items-center gap-12'>
                            <Link href='/'><li className='text-base'>Home</li></Link>
                            <Link href='/contact'><li className='text-base'>Contact</li></Link>
                            <Link href='/about'><li className='text-base'>About</li></Link>
                            <Link href='/sign-up'><li className='text-base'>Sign Up</li></Link>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className='relative'>
                            <input type="text" className='py-3 px-4 bg-[#F5F5F5] w-[250px]' placeholder='What are you looking for?' />
                            <span className='absolute top-3 right-2'><Image src='/Search.png' alt='image' width={20} height={20} /></span>
                        </div>
                        <FavoriteBorderIcon />
                        <Image src='/Cart1.png' alt='image' width={20} height={20} />
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <AccountCircleIcon className='text-4xl text-[#DB4444]' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='backdrop-blur-3xl font-semibold'>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            {/* mobile header */}
            <div className='lg:hidden block py-4 max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-bold text-2xl'>Exclusive</span>
                    </div>
                    <div>
                        {
                            open ? <CloseIcon onClick={() => setOpen(!open)} className='fixed z-10 right-5 top-5' /> : <MenuIcon onClick={() => setOpen(!open)} />
                        }
                        <div className={`h-screen w-full fixed top-0 right-0 transition-all ease-in-out duration-500  ${open ? 'translate-x-0' : 'translate-x-full'} `}>
                            {
                                open ?
                                    <div className={`h-full w-full absolute top-0 bg-[#DB4444] `}>
                                        <div className='flex justify-between items-center flex-col gap-10 my-20 text-white'>
                                            <div>
                                                <span className='font-bold text-2xl'>Exclusive</span>
                                            </div>
                                            <div>
                                                <ul className='flex items-center gap-12 lg:flex-row flex-col'>
                                                    <Link onClick={() => setOpen(!open)} href='/'><li className='text-base'>Home</li></Link>
                                                    <Link onClick={() => setOpen(!open)} href='/contact'><li className='text-base'>Contact</li></Link>
                                                    <Link onClick={() => setOpen(!open)} href='/about'><li className='text-base'>About</li></Link>
                                                    <Link onClick={() => setOpen(!open)} href='/sign-up'><li className='text-base'>Sign Up</li></Link>
                                                </ul>
                                            </div>
                                            <div className='flex justify-between items-center gap-6 flex-col'>
                                                <div className='flex gap-6 items-center'>
                                                    <Image src='/Vector.png' alt='image' width={20} height={20} />
                                                    <Image src='/Cart1.png' alt='image' width={20} height={20} />
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>
                                                            <AccountCircleIcon className='text-4xl' />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className='bg-white '>
                                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                                            <DropdownMenuItem>Billing</DropdownMenuItem>
                                                            <DropdownMenuItem>Team</DropdownMenuItem>
                                                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                                <div className='relative'>
                                                    <input type="text" className='py-3 px-4 bg-[#F5F5F5] w-[250px]' placeholder='What are you looking for?' />
                                                    <span className='absolute top-3 right-2'><Image src='/Search.png' alt='image' width={20} height={20} /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header