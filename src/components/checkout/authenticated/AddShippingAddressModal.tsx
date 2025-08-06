import ErrorMessageInput from '@/components/ui/ErrorMessageInput'
import Modal from '@/components/ui/Modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ADD_NEW_SHIPPING_ADDRESS_INPUTS } from '@/constants/forms'
import useAddShippingAddressModal from '@/hooks/useAddShippingAddressModal'
import clsx from 'clsx'
import React, { useEffect } from 'react'

const AddShippingAddressModal = () => {
    const { isOpen, errors, handleSubmit, onSubmit, register, setFocus, handleCloseModal, isLoadingAddAddress } = useAddShippingAddressModal();

    const renderInputs = ADD_NEW_SHIPPING_ADDRESS_INPUTS.map((i) => (
        <div key={i.id} className={clsx("space-y-2", i.style)}>
            <Label htmlFor="address">{i.label} *</Label>
            <Input
                id={i.id}
                {...register(i.name)}
                placeholder={i.placeholder}
                className={clsx(errors.address ? "border-red-500" : "", "py-5")}
            />
            {errors[i.name] && <ErrorMessageInput message={errors[i.name]?.message as string} />}
        </div>
    ))

    useEffect(() => {
        setFocus("address");
    }, [])


    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <h1 className="text-2xl font-bold">New Shipping Address</h1>
                <div className="grid grid-cols-2 gap-4">
                    {renderInputs}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button onClick={handleCloseModal} type="button" size={"lg"} variant={"outline"} className="border cursor-pointer">Cancel</Button>
                    <Button disabled={isLoadingAddAddress} size={"lg"} className="bg-green-500 hover:bg-green-600 cursor-pointer">Confirm</Button>
                </div>
            </form>
        </Modal>
    )
}

export default AddShippingAddressModal