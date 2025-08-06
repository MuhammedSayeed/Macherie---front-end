import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import clsx from 'clsx'
import React from 'react'


interface IProps {
    option: {
        id: string,
        label: string,
        Icon: React.FC<React.SVGProps<SVGSVGElement>>,
        value: string,
    }
}

const PaymentCardOption = ({ option }: IProps) => {
    const { Icon, label, value, id } = option;
    return (
        <div key={id} className={clsx("flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50")}>
            <RadioGroupItem value={value} id={id} />
            <Label htmlFor={id} className="flex items-center space-x-1 cursor-pointer flex-1">
                <Icon className="h-5 w-5 text-green-600" />
                <p className="font-medium">{label}</p>
            </Label>
        </div>
    )
}

export default PaymentCardOption