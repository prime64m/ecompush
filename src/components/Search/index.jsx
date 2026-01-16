import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";


const Search = () => {
    return (
        <div className='searchBox w-[100%] bg-[#e5e5e5] radius-[10px] relative p-2'>
            <input type="text" placeholder='Search for products....' className='w-full
             h-[35px] focus:outline-none bg-inherit p-2  text-[15px]' />

            <Button className='!absolute top-[1px] right-5 z-50 !w-[38px] !min-w-[38px]
            !h-[38px] !rounded-full !text-black'><IoIosSearch className='text-[#000]
             text-[22px]'/></Button>
        </div>
    )
}

export default Search
