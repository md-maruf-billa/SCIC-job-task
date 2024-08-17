import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, NavLink } from "react-router-dom"
import { LuPhoneCall } from "react-icons/lu";


const Nav = () => {

    const navLink = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        <li><NavLink to={"/pages"}>Pages</NavLink></li>
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>

    </>


    return (
        <div>
            {/* Top Header  bg-[#333333]*/}

            <div className=' text-[#666666] text-xs p-4'>
                <div className='all-container mx-auto flex flex-col  md:flex-row justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn />
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <select className='bg-transparent border-none outline-none p-1' name="" id="">
                            <option value="">Eng</option>
                            <option value="">Ban</option>
                        </select>
                        <select className='bg-transparent border-none outline-none p-1' name="" id="">
                            <option value="">USD</option>
                            <option value="">Tka</option>

                        </select>
                        <span>
                            |
                        </span>
                        <Link to="/login">
                            Sign In
                        </Link>
                        <span>/</span>
                        <Link to="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>





            {/* End Nav bar */}

            <div className='bg-[#333333be] text-[#999999]'>
                <div className="navbar  all-container mx-auto">
                    <div>
                        <img className='w-[120px]' src="./logo.png" alt="" />
                    </div>
                    <div className="navbar-start lg:hidden z-50">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                {navLink}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='text-white flex items-center gap-2'>
                            <LuPhoneCall className='text-2xl' />
                            <p>(+880) 17XXX</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Nav;