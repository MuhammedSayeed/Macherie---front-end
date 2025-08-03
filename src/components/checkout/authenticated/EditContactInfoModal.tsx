import Modal from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useEditContactInfoModal from "@/hooks/useEditContactInfoModal"
import { CheckoutFormData, EditContactFormData } from "@/types/checkout"
import clsx from "clsx"
import { UseFormReturn } from "react-hook-form"


interface IProps {
  form: UseFormReturn<CheckoutFormData>
}


const EditContactInfoModal = ({ form }: IProps) => {
  const { register, errors, handleSubmit, isOpen, handleCloseEditModal , isValueChanged} = useEditContactInfoModal({
    name: form.getValues("name"),
    phone : form.getValues("phone")
  });


  const onSumbit = (data: EditContactFormData) => {
    form.setValue("name", data.name)
    form.setValue("phone", data.phone)
    handleCloseEditModal();
  }


  return (
    <Modal isOpen={isOpen} onClose={handleCloseEditModal}>
      <form onSubmit={handleSubmit(onSumbit)} className="space-y-6">
        <h1 className="text-2xl font-bold">Contact Information</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 ">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter your full name"
              className={clsx(errors.name ? "border-red-500" : "", "py-5")}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="Enter your phone number"
              className={clsx(errors.name ? "border-red-500" : "", "py-5")}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={handleCloseEditModal} type="button" size={"lg"} variant={"outline"} className="border cursor-pointer">Cancel</Button>
          <Button disabled={!isValueChanged} size={"lg"} className="bg-green-500 hover:bg-green-600 cursor-pointer">Confirm</Button>
        </div>
      </form>
    </Modal>
  )
}

export default EditContactInfoModal