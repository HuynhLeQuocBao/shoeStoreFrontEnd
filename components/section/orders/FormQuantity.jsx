import { useForm, Controller } from "react-hook-form";
import { cartApi } from '@/apiClient/cartAPI';
import { useState, useEffect } from 'react'
export function FormQuantity({ ...props }) {
    const [quantity, setQuantity] = useState(props.quantity)
    const cartId = props.cartId
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        mode: "onChange"
    });
    const handleSub = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }
    const handleAdd = () => {
        setQuantity(quantity + 1)
    }
    const onSubmit = () => {
        const dataForm = new FormData()
        dataForm.append('quantity', quantity)
        const fetchUpdateCart = async () => {
            try {
                const result = await cartApi.updateCart(cartId, dataForm);
                console.log({ result });
            } catch (error) {
            }
        };
        fetchUpdateCart();
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name='quantity'
                    render={({ field }) => (
                        <div>
                            <button
                                className='border border-2 w-8 h-8 hover:bg-primary hover:text-white cursor-pointer'
                                onClick={handleSub}
                            >
                                -
                            </button>
                            <input
                                className='w-10 h-10 text-center item-center'
                                type="text"
                                value={quantity}
                                disabled={true}
                            />
                            <button
                                className='border border-2 w-8 h-8 hover:bg-primary hover:text-white cursor-pointer'
                                onClick={handleAdd}
                            >
                                +
                            </button>
                        </div>
                    )}
                />

            </form>
        </>
    )
}