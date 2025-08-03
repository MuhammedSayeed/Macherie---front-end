"use client"
import { useRouter } from 'next/navigation'
import Modal from './ui/Modal'
import { Button } from './ui/button'
import { useAuthOptionsModalStore } from '@/lib/store/authOptionsModalStore'

const AuthOptionsModal = () => {

    const { isOpen, setAuthOptionsModalState } = useAuthOptionsModalStore();
    const router = useRouter();
    const handleNavigate = (path: string) => {
        router.push(path);
        setAuthOptionsModalState(false);
    }

    const handleClose = () => {
        setAuthOptionsModalState(false);
    }

    return (
        <Modal className='p-8 space-y-7 text-center max-w-xl' isOpen={isOpen} onClose={handleClose}>
            <div className="space-y-2">
                <h1 className='text-2xl font-medium'>{`You're Almost There!`}</h1>
                <p className='text-sm text-black/70'>{`You'll need an account to access your profile. It only takes a few second`}</p>
            </div>
            <div className="flex gap-2">
                <Button onClick={() => handleNavigate("/login")} size={"lg"} className='flex-1  bg-black rounded-full cursor-pointer'>Login</Button>
                <Button onClick={() => handleNavigate("/register")} size={"lg"} className='flex-1  bg-black rounded-full cursor-pointer'>Sign Up</Button>
            </div>
        </Modal>
    )
}

export default AuthOptionsModal