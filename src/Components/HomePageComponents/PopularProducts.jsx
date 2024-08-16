import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { SlHandbag } from "react-icons/sl";

// Rating icons
import starGray from '../../assets/ratingIcons/star-grey.png';
import starRed from '../../assets/ratingIcons/star-red.png';
import starYellow from '../../assets/ratingIcons/star-yellow.png';

import { LuEye } from 'react-icons/lu';
import ItemLoader from '../../Shared/ItemLoader/ItemLoader';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios/useAxios';
import { useQuery } from '@tanstack/react-query';



const PopularProducts = () => {
    const axiosGlobal = useAxios();
    const [isHoverId, setIsHoverId] = useState(null);
    const {data:allProducts,isLoading} = useQuery({
        queryKey:["Home page 10 products"],
        queryFn: async ()=>{
            const result = await axiosGlobal("/all-products");
            return result.data;
        }
    })
    

    if (isLoading) return <ItemLoader />


    return (
        <div className='mt-16 all-container mx-auto'>
            <div className='flex justify-between items-center font-[600] mb-8'>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Popular Products</h2>
                <Link to={"all-products"} className='flex items-center gap-3 text-[#00b207] text-sm md:text-base hover:underline'>View all <FaArrowRight /></Link>



            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    allProducts?.slice(0,10)?.map(({ productPic, _id, name, offerPrice, regularPrice, ratings, discount, brandName }) =>

                        <div
                            onMouseOver={() => setIsHoverId(_id)}
                            onMouseOut={() => setIsHoverId(null)}
                            key={_id}
                            className='border relative  py-2  cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                        >
                            <img src={productPic} alt="" />

                            <div className='flex justify-between items-center px-4'>
                                <div>
                                    <div>
                                        <h2 className=' font-semibold text-[#00B207] hover:text-[#4d4d4d] hover:underline'>{name}</h2>
                                        <p className='text-xs text-[#4d4d4d]'>{brandName}</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className={`${offerPrice ? "font-semibold text-xl" : "hidden"}`}>$ {offerPrice} </h2>
                                        <h2 className={`${offerPrice ? "line-through text-[#999999] text-base" : "font-semibold text-xl"} `}>$ {regularPrice} </h2>

                                    </div>
                                    <Rating
                                        placeholderRating={ratings}
                                        emptySymbol={<img src={starGray} className="icon" />}
                                        placeholderSymbol={<img src={starRed} className="icon" />}
                                        fullSymbol={<img src={starYellow} className="icon" />}
                                    />

                                </div>
                                <div className='bg-[#f2f2f2] p-3 rounded-full hover:bg-[#00b207] hover:text-white transition'>
                                    <SlHandbag />
                                </div>

                            </div>

                            <p className={`${discount ? "px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4" : "hidden"}`}>Sale {discount}%</p>
                            <div
                                hidden={isHoverId !== _id}
                                className='absolute top-3 right-3 space-y-2'>
                                <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><FaRegHeart /></div>
                                <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><LuEye /></div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default PopularProducts;