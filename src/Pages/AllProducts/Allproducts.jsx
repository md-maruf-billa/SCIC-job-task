import React, { useEffect, useState } from 'react';
import Button from '../../Shared/Button/Button';
import useAxios from './../../Hooks/useAxios/useAxios';
import { useQuery } from '@tanstack/react-query';
import TimeCounter from '../../Components/AllProductsComponenes/TimeCounter/TimeCounter';
import ItemLoader from '../../Shared/ItemLoader/ItemLoader';
import Rating from 'react-rating';

// Rating icons
import starGray from '../../assets/ratingIcons/star-grey.png';
import starRed from '../../assets/ratingIcons/star-red.png';
import starYellow from '../../assets/ratingIcons/star-yellow.png';
import { SlHandbag } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AllProducts = () => {
    const axiosGlobal = useAxios();
    const [isHoverId, setIsHoverId] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [brandValue, setBrandValue ] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [priceValue, setPriceValue] = useState('');

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ["FilteredData", searchValue],
        queryFn: async () => {
            const result = await axiosGlobal(`products?search=${searchValue}&brand=${brandValue}`);
            return result.data;
        }
    });

    useEffect(() => {

        refetch();

    }, [searchValue,brandValue, refetch]);


    return (
        <div className='all-container mx-auto px-2'>

            {/*  Upper banner */}
            <div className='bg-[url(https://i.postimg.cc/RZsVqBvd/Discount-Bannar.png)] bg-no-repeat bg-cover py-[68px] md:pl-[68px] relative mt-6 rounded-xl flex flex-col items-center md:items-start justify-center'>
                <p className='text-sm uppercase text-white'>Best Deals</p>
                <h1 className='text-3xl md:text-5xl text-white font-semibold mt-3'>Sale of the Month</h1>
                <TimeCounter />
                <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white mt-8"} />
                <p className='bg-[#ff8a00] w-fit absolute top-3 md:top-1/2 lg:top-[20%] right-3 md:left-1/2 lg:left-[40%] flex flex-col text-white p-3 md:p-5 rounded-full justify-center items-center'><span className='text-2xl font-semibold'>56% </span><span>OFF</span></p>
            </div>

            {/* Features header */}
            <div className='flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 mt-10'>
                <div className='flex items-center gap-4 flex-wrap'>
                    <select onChange={e=>setBrandValue(e.target.value)} className="select select-bordered w-fit">
                        <option disabled selected>Filter Brand</option>
                        <option>Nature Best</option>
                        <option>Organic Orchard</option>
                        <option>Healthy Harvest</option>
                        <option>Green Valley</option>
                    </select>
                    <select className="select select-bordered w-fit">
                        <option disabled selected>Filter Category</option>
                        <option>Fresh Vegetables</option>
                        <option>Fresh Fruit</option>
                    </select>
                    <select className="select select-bordered w-fit">
                        <option disabled selected>Filter Price</option>
                        <option>Under 10</option>
                        <option>Under 20</option>
                        <option>Under 50</option>
                    </select>
                </div>

                <div className='flex items-center gap-4 flex-wrap'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={e => setSearchValue(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </label>
                    <select className="select select-bordered w-fit">
                        <option disabled selected>Sort by Price</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-fit">
                        <option disabled selected>Sort by Time</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>

            <h3 className='mt-10 mb-4 text-right'>Total Product Found: <span className='text-[#2C742F] font-bold'>{data?.length}</span></h3>
            {
                isLoading ? <ItemLoader />
                    :

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                        {data?.map(({ productPic, _id, name, offerPrice, regularPrice, ratings, discount, brandName }) =>
                            <div
                                onMouseOver={() => setIsHoverId(_id)}
                                onMouseOut={() => setIsHoverId(null)}
                                key={_id}
                                className='border relative py-2 cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                            >
                                <img src={productPic} alt={name} />
                                <div className='flex justify-between items-center px-4'>
                                    <div>
                                        <h2 className='font-semibold text-[#00B207] hover:text-[#4d4d4d] hover:underline'>{name}</h2>
                                        <p className='text-xs text-[#4d4d4d]'>{brandName}</p>
                                        <div className='flex gap-2'>
                                            {offerPrice && <h2 className='font-semibold text-xl'>$ {offerPrice}</h2>}
                                            <h2 className={offerPrice ? "line-through text-[#999999] text-base" : "font-semibold text-xl"}>$ {regularPrice}</h2>
                                        </div>
                                        <Rating
                                            placeholderRating={ratings}
                                            emptySymbol={<img src={starGray} className="icon" alt="gray star" />}
                                            placeholderSymbol={<img src={starRed} className="icon" alt="red star" />}
                                            fullSymbol={<img src={starYellow} className="icon" alt="yellow star" />}
                                        />
                                    </div>
                                    <div className='bg-[#f2f2f2] p-3 rounded-full hover:bg-[#00b207] hover:text-white transition'>
                                        <SlHandbag />
                                    </div>
                                </div>
                                {discount && <p className='px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4'>Sale {discount}%</p>}
                                <div hidden={isHoverId !== _id} className='absolute top-3 right-3 space-y-2'>
                                    <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><FaRegHeart /></div>
                                    <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><LuEye /></div>
                                </div>
                            </div>
                        )}
                    </div>
            }

            {/* Pagination */}
            <div className='flex justify-center items-center gap-3 mt-10'>
                <button className='btn'><FaArrowLeft /> Prev</button>
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
                <button className='btn'>Next <FaArrowRight /></button>
            </div>

        </div>
    );
};

export default AllProducts;
