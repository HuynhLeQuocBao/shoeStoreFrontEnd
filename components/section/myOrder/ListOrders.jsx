import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";
export function ListOrders() {
    const data = [
        {
            id: 11111,
            state: 'confirmed',
            amount: 2,
            total: 300,
            date: '09/11/2001'
        },
        {
            id: 111212,
            state: 'pending',
            amount: 2,
            total: 300,
            date: '09/11/2001'
        },
        {
            id: 111123123111,
            state: 'pending',
            amount: 2,
            total: 300,
            date: '09/11/2001'
        },
    ]
    return (
        <div className="w-full my-16">
            <div className='hidden md:block w-full mt-32 mb-10'>
                <div className='w-full bg-[#f0f0f0] py-3 font-semibold text-base rounded-md items-center justify-center uppercase grid grid-cols-12 mb-6 shadow-lg'>
                    <div className='text-center col-span-1'>
                        <span>STT</span>
                    </div>
                    <div className='text-center col-span-4'>
                        <span>STATE</span>
                    </div>
                    <div className='text-center col-span-1'>
                        <span>AMOUNT</span>
                    </div>
                    <div className='text-center col-span-2'>
                        <span>TOTAL</span>
                    </div>
                    <div className='col-span-2  text-center'>
                        <span>DATE</span>
                    </div>
                    <div className='text-center col-span-2'>
                        <span>VIEW DETAILS</span>
                    </div>
                </div>
                {
                    data.length > 0 ?
                        data.map((item, index) => (
                            <Link href={`/order-detail/${item.id}`} key={index}>
                                <div className='w-full text-sm grid grid-cols-12  border border-b-2 shadow-lg rounded-3xl hover:bg-zinc-100 duration-500 py-3 mb-2 cursor-pointer'>
                                    <div className='text-center col-span-1'>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className='text-center col-span-4 flex justify-center items-center'>
                                        <div
                                            className={`
                                            
                                                ${item.state === 'confirmed' ? 'bg-green-500' : 'bg-orange-400'}
                                                w-fit py-1 px-4 rounded-2xl uppercase text-white font-bold
                                            `}
                                        >
                                            {item.state.toLowerCase()}
                                        </div>
                                    </div>
                                    <div className='text-center col-span-1'>
                                        <span>{item.amount}</span>
                                    </div>
                                    <div className='text-center col-span-2'>
                                        <span>$ {item.total}</span>
                                    </div>
                                    <div className='col-span-2  text-center'>
                                        <span>{item.date}</span>
                                    </div>
                                    <div className='flex justify-end items-center col-span-2 pr-14'>
                                        <HiOutlineChevronRight />
                                    </div>
                                </div>
                            </Link>
                        )) :
                        <div>a</div>

                }

            </div>
        </div>
    )
}