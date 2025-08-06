import { Button } from "@/components/ui/button";
import { CheckoutFormData } from "@/types/checkout";
import { Edit } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { useEditContactInfoModalStore } from "@/lib/store/EditContactInfoModalStore";
import { CONTACT_INFO } from "@/constants/contact";


interface IProps {
  form: UseFormReturn<CheckoutFormData>
}
const AuthenticatedContactSection = ({ form }: IProps) => {
  const { setEditContactInfoState } = useEditContactInfoModalStore();

  const handleOpenEditModal = () => setEditContactInfoState(true);

  const renderContactInfo = CONTACT_INFO.map(({ label, value }) => (
    <div key={value} className="flex justify-between items-center py-2 border-b">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-medium">{form.watch(value)}</span>
    </div>
  ))

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
        {renderContactInfo}
      </div>
    </section>
  )
}

export default AuthenticatedContactSection