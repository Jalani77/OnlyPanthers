import { create } from 'zustand';
import { User } from '../types';

interface UserStore {
  user: User;
  updateUser: (partial: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: 'u1',
    name: 'Panther Student',
    major: 'Business Administration',
    year: 'Junior',
    email: 'student@gsu.edu',
    reviewsWritten: 3,
  },
  updateUser: (partial) =>
    set((state) => ({ user: { ...state.user, ...partial } })),
}));
