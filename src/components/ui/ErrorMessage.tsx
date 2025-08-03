import clsx from "clsx"

interface ErrorMessageProps {
    message?: string
    className?: string
}

const ErrorMessage = ({ message = "Something went wrong. Please try again later.", className = "" }: ErrorMessageProps) => {
    return (
        <div className={clsx("flex flex-col gap-3 items-center justify-center min-h-[400px]", className)}>
            <div className="text-center">
                <p className="text-gray-600 text-xl">{message}</p>
            </div>
        </div>
    )
}

export default ErrorMessage