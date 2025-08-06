import clsx from "clsx";



interface IProps {
    message: string | undefined;
    className?: string;
}
const ErrorMessageInput = ({ message, className }: IProps) => {


    if (message === undefined) return null;
    return <span className={clsx("text-sm block text-red-500 mt-1", className)}>{message}</span>
}

export default ErrorMessageInput