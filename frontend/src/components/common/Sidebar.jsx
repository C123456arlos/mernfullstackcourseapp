import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import XSvg from '../svgs/X'
import { MdHomeFilled } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    const data = {
        fullName: 'person name',
        username: 'person',
        profileImg:'avatars/boy1.png'
    }
    return (
      <>
            <div className='md:flex-[2_2_0] w-18 max-w-52'>
                <div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full'>
                    <Link to='/' className='flex justify-center md:justify-start'>
                        <XSvg className='px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900'></XSvg>
                    </Link>
          <ul className='flex flex-col gap-3 mt-4'>
                        <li className='flex justify-center md:justify-start'>
                            <Link to='/' className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'>
                                <MdHomeFilled className='w-6 h-6'></MdHomeFilled>
                            <span className='text-lg hidden md:block'>home</span>
                            </Link>
              </li>
              <li className='flex justify-center md:justify-start'>
                  <Link to={'/notifications'} className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'>
                      <IoNotifications className='w-6 h-6'></IoNotifications>
                      <span className='text-lg hidden md:block'>notifications</span>
                  </Link>
              </li>
              <li className='flex justify-center md:justify-start'>
                  <Link to={`/profile/${data?.username}`} className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'>
                      <FaUser className='w-6 h-6'></FaUser>
                      <span className='text-lg hidden md:block'>profile</span>
                  </Link>
              </li>
         </ul>
          
          {data && 
          <Link to={`/profile/${data.username}`} className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#101010] py-2 px-4 rounded-full'>
          <div className='avatar hidden md:inline-flex'>
              <div className='w-8 rounded-full'>
                  <img src={data?.profileImg || '/avatar-placeholder.png'} className='bg-white'></img>
              </div>
              <div className='flex justify-between flex-1'>
                  <div className='hidden md:block'>
                      <p className='text-white font-bold text-sm w-20 truncate'>{data?.fullName}</p>
                      <p className='text-slate-500 text-sm'>{data?.username}</p>
                  </div>
                  <BiLogOut className='w-5 h-5 cursor-pointer'></BiLogOut>
              </div>
          </div>
          </Link>}
                </div>
                </div>
      </>
  )
}

export default Sidebar