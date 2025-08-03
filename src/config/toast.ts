import toast from 'react-hot-toast';

const showToast = (message: string, type: 'success' | 'error' | 'loading') => {
    toast[type](message, {
        duration: 2000,
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

export default showToast;