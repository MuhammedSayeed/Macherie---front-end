import clsx from "clsx";



interface IProps {
    message: string;
    className?: string;
}
const ErrorMessageInput = ({ message, className }: IProps) => {
    return <span className={clsx("text-sm block text-red-600 mt-1", className)}>{message}</span>
}

export default ErrorMessageInput