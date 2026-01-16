import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';




const Navigation = (props) => {
    const[isOpenCatpanel,setIsOpenCatpanel]=useState(false);
    const openCategoryPanel=()=>{
        setIsOpenCatpanel(true);
    }
    return (
        <>
        
        <nav className='PY-2'>
            <div className='container flex items-center justify-end gap-8'>
                <div className='col_1 w-[23%]'>
                    <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><MdOutlineMenu
                        className='text-[15px]' /> Shop By Categories <IoIosArrowDown
                            className='text-[11px] ml-auto font-bold' /></Button>
                </div>

                <div className='col_2 w-[60%]'>
                    <ul className='flex items-center gap-1.1'>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            >
                                <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Home</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            >
                                 <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Fashion</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Electronics</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Bags</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Footware</Button></Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Groceries</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Beauty</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>wellness</Button></Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" className='link transition text-[14px] font-[500]'
                            > <Button className='link transition !font-[500] 
                                !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>Jewellery</Button></Link>
                        </li>

                    </ul>
                </div>

                <div className='col_3 w-[17%]'>
                    <p className='text-[12px] font-[500] flex items-center gap-1.5 mb-0 mt-0'
                    ><GoRocket className='text-[14px]' />
                        Free International Delivery</p>

                </div>




            </div>
        </nav>
        

        {/* {<CategoryPanel component />} */}
        <CategoryPanel isOpenCatpanel={isOpenCatpanel} setIsOpenCatpanel={setIsOpenCatpanel} />

        </>


    

    )
}

export default Navigation;
