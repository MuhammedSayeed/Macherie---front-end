import { create } from 'zustand';

interface LoginDrawerStore {
  isOpen: boolean;
  setLoginDrawerState: (state: boolean) => void;
}

export const useLoginDrawerStore = create<LoginDrawerStore>((set) => ({
  isOpen: false,
  setLoginDrawerState: (state: boolean) => set({ isOpen: state }),
  
}));
