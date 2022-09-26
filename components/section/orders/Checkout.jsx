/* This example requires Tailwind CSS v2.0+ */
import { Container } from '@/components/common'
import { useForm, Controller } from "react-hook-form";
import { cartApi } from '@/apiClient/cartAPI';
import { useState, useEffect } from 'react'
import { FormQuantity } from './FormQuantity';
import Link from 'next/link';
import { ProgressCart } from './';
import { Title } from '../title';
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


export function Checkout() {
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
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Container>
            <ProgressCart />
            <div className='grid grid-cols-12 gap-4 w-full my-32'>
                <div className='col-span-7 w-full bg-[#f5f5f5] p-4'>
                    <div className='font-bold text-2xl py-4'>
                        <h1>Billing Details</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full my-4 grid grid-cols-12 gap-3 '>
                            <div className='col-span-6'>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field }) => (
                                        <div className='col-span-6'>
                                            <label htmlFor='firstName'>FIRST NAME</label>
                                            <input
                                                id='firstName'
                                                placeholder='First Name'
                                                className='w-full p-4 rounded-xl my-2'
                                                {...register("firstName")}

                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            <div className='col-span-6'>
                                <Controller
                                    control={control}
                                    name='lastName'
                                    render={({ field }) => (
                                        <div>
                                            <label htmlFor='lastName'>LAST NAME</label>
                                            <input
                                                id='lastName'
                                                placeholder='Last Name'
                                                className='w-full p-4 rounded-xl my-2'
                                                {...register("lastName")}

                                            />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className='w-full my-4'>
                            <Controller
                                control={control}
                                name='address'
                                render={({ field }) => (
                                    <div>
                                        <label htmlFor='address'>ADDRESS</label>
                                        <input
                                            id='address'
                                            placeholder='Address'
                                            className='w-full p-4 rounded-xl my-2'
                                            {...register("address")}

                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='w-full my-4'>
                            <Controller
                                control={control}
                                name='phone'
                                render={({ field, value }) => (
                                    <div>
                                        <label htmlFor='phone'>PHONE</label>
                                        <input
                                            id='phone'
                                            placeholder='Phone'
                                            className='w-full p-4 rounded-xl my-2'
                                            {...register("phone")}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='w-full my-4'>
                            <Controller
                                control={control}
                                name='email'
                                render={({ field }) => (
                                    <div>
                                        <label htmlFor='address'>EMAIL</label>
                                        <input
                                            id='email'
                                            name='email'
                                            placeholder='Email'
                                            className='w-full p-4 rounded-xl my-2'
                                            {...register("email")}

                                        />
                                    </div>
                                )}
                            />
                        </div>
                        <div className='w-full my-10 flex justify-center items-center'>
                            <button className='w-1/2 md:w-1/4 py-2 rounded-2xl bg-green-400 cursor-pointer hover:bg-green-600'>
                                Complete
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-span-5'>

                    <div className='w-full mb-8 p-4 bg-[#f5f5f5] font-medium'>
                        <div className='font-bold text-2xl py-4'>
                            <h1>Cart Details</h1>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>Subtotal: </span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>quantity*(Product Name:) </span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>quantity*(Product Name:) </span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>Shipping: </span>
                        </div>
                        <div className=' my-2'>
                            <span>Order Total: </span>
                        </div>
                    </div>

                    <div className='w-full mb-8 p-4 bg-[#f5f5f5] font-medium'>
                        <div className='font-bold text-2xl py-4'>
                            <h1>Cart Details</h1>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>Subtotal: </span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>quantity*(Product Name:)</span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>quantity*(Product Name:)</span>
                        </div>
                        <div className='border-b-2 my-2'>
                            <span>Shipping: </span>
                        </div>
                        <div className=' my-2'>
                            <span>Order Total: </span>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )

}
