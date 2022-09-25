/* This example requires Tailwind CSS v2.0+ */
import { Container } from '@/components/common'
import { useForm, Controller } from "react-hook-form";
import { cartApi } from '@/apiClient/cartAPI';
import { useState, useEffect } from 'react'
import { FormQuantity } from './FormQuantity';
import Link from 'next/link';

const steps = [
    { name: 'SHOPPING CART', href: '#', step: '01', status: 'current' },
    { name: 'CHECKOUT', href: '#', step: '02', status: 'upcoming' },
    { name: 'COMPLETE', href: '#', step: '03', status: 'upcoming' },

]
const arrCartItems = [
    {
        id: "632fbef44eab5c1c28035262",
        userId: "624afdd2c598b0e0c9eb7297",
        productId: "617e9cb57b1ddb194ce46922",
        size: "6",
        quantity: 2,
        total: 75,
        createdAt: "2022-09-25T02:37:40.285Z",
        updatedAt: "2022-09-25T04:31:04.200Z",
        __v: 0,
        image: "Giay_UltraBoost_21_trang_FY0377_01_standard.jpg",
        productName: "UtralBoost 2021 ",
        productPrice: 75,
    },
    {
        id: "632fbf034eab5c1c28035268",
        userId: "624afdd2c598b0e0c9eb7297",
        productId: "617e9cb57b1ddb194ce46922",
        size: 6,
        quantity: 1,
        total: 75,
        createdAt: "2022-09-25T02:37:55.023Z",
        updatedAt: "2022-09-25T02:37:55.023Z",
        __v: 0,
        image: "Giay_UltraBoost_21_trang_FY0377_01_standard.jpg",
        productName: "UtralBoost 2021 ",
        productPrice: 75,
    }
]
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export function ShoppingCart() {
    const [quantity, setQuantity] = useState([])
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        mode: "onChange"
    });
    useEffect(() => {
        try {
            const fetchCart = async () => {
                const dataCart = await cartApi.getAllCart();
                console.log(dataCart)
            };
            fetchCart();
        } catch (error) {
            console.log("Error");
        }
    }, []);
    const handleDeleteItemCart = (id) => {
        const fetchDeleteCart = async () => {
            try {
                const result = await cartApi.deleteCart(id);
                console.log({ result });
            } catch (error) {
            }
        };
        fetchDeleteCart();
    }

    return (
        <Container>
            <nav aria-label="Progress" className='w-full'>
                <ol role="list" className="flex justify-center text-[12px] md:text-sm items-center w-full my-20 h-auto">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'w-full pl-10' : 'px-10', ' relative')}>
                            {step.status === 'complete' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-16 w-full h-0.5 bg-primary" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group">
                                        <span className="h-9 flex items-center">
                                            <span className="text-white z-10 w-20 h-20 flex items-center justify-center bg-primary rounded-full group-hover:bg-primary">
                                                {step.step}
                                            </span>
                                        </span>
                                        <span className="absolute left-2 sm:-left-2 top-16">
                                            {step.name}
                                        </span>
                                    </a>

                                </>
                            ) : step.status === 'current' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-16 w-full h-0.5 bg-gray-300" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group" aria-current="step">
                                        <span className="h-9 flex items-center" aria-hidden="true">
                                            <span className="z-10 w-20 text-primary h-20 flex items-center justify-center bg-white border-[3px] border-primary rounded-full ">
                                                {step.step}
                                            </span>
                                        </span>
                                        <span className="absolute left-2 top-16">
                                            {step.name}
                                        </span>
                                    </a>

                                </>
                            ) : (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-16 w-full h-0.5 bg-gray-300" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group">
                                        <span className="h-9 flex items-center" aria-hidden="true">
                                            <span className=" z-10 w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-primary">
                                                {step.step}
                                            </span>
                                        </span>
                                        <span className="absolute left-2  top-16">
                                            {step.name}
                                        </span>
                                    </a>

                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <div className='hidden md:block w-full my-32'>
                <div className='w-full bg-slate-400 font-semibold text-base h-8 items-center justify-center uppercase grid grid-cols-12'>
                    <div className='text-center col-span-5'>
                        <span>PRODUCT DETAILS</span>
                    </div>
                    <div className='text-center col-span-1'>
                        <span>PRICE</span>
                    </div>
                    <div className='text-center col-span-2'>
                        <span>QUANTITY</span>
                    </div>
                    <div className='col-span-2  text-center'>
                        <span>TOTAL</span>
                    </div>
                    <div className='text-center col-span-2'>
                        <span>REMOVE</span>
                    </div>
                </div>
                {arrCartItems &&
                    arrCartItems.map((item, index) => {
                        return (
                            <div key={index} className='w-full text-sm grid grid-cols-12  border border-b-2 '>
                                <div className=' font-medium col-span-5 flex justify-start items-center py-2 pl-2'>
                                    <img src={`http://localhost:3010/upload/${item.image}`} className='w-20 h-20 object-cover' />
                                    <div className='ml-2'>
                                        <span>{item.productName}</span>
                                    </div>
                                </div>
                                <div className='text-center col-span-1 flex justify-center items-center'>
                                    <span>${item.productPrice}</span>
                                </div>
                                <div className='text-center col-span-2 flex justify-center items-center'>
                                    <FormQuantity quantity={item.quantity} cartId={item.id} />
                                </div>
                                <div className='col-span-2  text-center flex justify-center items-center'>
                                    <span>${item.total}</span>
                                </div>
                                <div className='text-center col-span-2 flex justify-center items-center pr-2'>
                                    <button
                                        className='text-blue-500 hover:text-blue-800 cursor-pointer'
                                        onClick={() => handleDeleteItemCart(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='w-full px-4 my-32 md:hidden'>
                {arrCartItems &&
                    arrCartItems.map((item, index) => {
                        return (
                            <div key={index} className='w-full grid grid-cols-12 mb-5 shadow-md shadow-[#88c8bc]'>
                                <div className='w-full flex items-center col-span-4'>
                                    <img src={`http://localhost:3010/upload/${item.image}`} className='w-30 h-30 object-cover p-2 ' />
                                </div>

                                <div className='col-span-6'>
                                    <div className='w-full font-bold '>
                                        <span>Name: {item.productName}</span>
                                    </div>
                                    <div className='w-full font-bold text-red-500'>
                                        <span>price: ${item.productPrice}</span>
                                    </div>
                                    <div className='w-full'>
                                        <FormQuantity quantity={item.quantity} cartId={item.id} />
                                    </div>
                                    <div className='w-full font-bold'>
                                        <span>Total: ${item.total}</span>
                                    </div>
                                </div>
                                <div className='col-span-2 flex justify-center items-center'>
                                    <button
                                        className='w-10 h-10 cursor-pointer text-red-500 hover:text-red-800'
                                        onClick={() => handleDeleteItemCart(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className='w-full grid grid-cols-12'>
                <div className='col-span-12 md:col-span-6 px-4 my-4 '>
                    <input className='w-full border border-2 px-4 py-2 mb-4 rounded-md' placeholder='Your coupon code' />
                    <button className='w-full md:w-1/2 px-4 py-2 bg-primary cursor-pointer rounded-2xl hover:bg-cyan-600'>Apply coupon</button>
                </div>
                <div className='col-span-12 md:col-span-6  px-4 w-full'>
                    <div className='w-full bg-slate-200 px-4'>
                        <div className='w-full'>
                            <span>Subtotal: </span>
                        </div>
                        <div className='w-full'>
                            <span>Delivery: </span>
                        </div>
                        <div className='w-full'>
                            <span>Discount: </span>
                        </div>
                        <div className='border border-1 border-black w-full'></div>
                        <div className='w-full'>
                            <span>Total: </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full my-10 flex justify-center items-center'>
                <Link href='/checkout'>
                    <button className='w-1/2 md:w-1/6 py-2 rounded-2xl bg-green-400 cursor-pointer hover:bg-green-600'>
                        Checkout
                    </button>
                </Link>
            </div>
        </Container>
    )

}
