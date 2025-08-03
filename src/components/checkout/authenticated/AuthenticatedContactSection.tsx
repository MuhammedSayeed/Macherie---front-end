import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/types/checkout";
import { Edit } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { useEditContactInfoModalStore } from "@/lib/store/EditContactInfoModalStore";


interface IProps {
  form: UseFormReturn<CheckoutFormData>
}
const AuthenticatedContactSection = ({ form }: IProps) => {
  const { setEditContactInfoState } = useEditContactInfoModalStore();


  const handleOpenEditModal = () => setEditContactInfoState(true)

  return (
    <section className="space-y-4">
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">Contact Information</h1>
        <Button type="button" className="cursor-pointer" onClick={handleOpenEditModal} variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-sm text-gray-600">Name</span>
          <span className="font-medium">{form.watch("name")}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-sm text-gray-600">Email</span>
          <span className="font-medium">{form.watch("email")}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Phone</span>
          <span className="font-medium">{form.watch("phone")}</span>
        </div>
      </div>
    </section>
  )
}

export default AuthenticatedContactSection