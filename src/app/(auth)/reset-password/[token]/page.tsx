import ResetPasswordForm from '@/components/ResetPasswordForm/ResetPasswordForm';
import React from 'react'

interface PageProps {
    params: Promise<{ token: string }>
}

const ResetPasswordPage = async ({ params }: PageProps) => {
    const { token } = await params;

    return (
        <div className="flex flex-col">
            <div className="flex-1 px-6 py-8">
                <div className="max-w-md mx-auto">
                    <div className="mb-8 md:text-center">
                        <h1 className="text-2xl font-semibold text-gray-900 leading-tight">Reset Your Password</h1>
                        <p className="text-black/60 text-sm font-mono">Enter your new password</p>
                    </div>
                    <ResetPasswordForm token={token} />
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage