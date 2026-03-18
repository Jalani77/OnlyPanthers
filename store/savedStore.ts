import { create } from 'zustand';
import { SavedState } from '../types';

export const useSavedStore = create<SavedState>((set) => ({
  savedDealIds: ['d1', 'd5', 'd7'],
  savedRoommateIds: ['rm1', 'rm6'],
  savedNewsIds: ['n1', 'n4'],
  toggleSavedDeal: (id) =>
    set((state) => ({
      savedDealIds: state.savedDealIds.includes(id)
        ? state.savedDealIds.filter((x) => x !== id)
        : [...state.savedDealIds, id],
    })),
  toggleSavedRoommate: (id) =>
    set((state) => ({
      savedRoommateIds: state.savedRoommateIds.includes(id)
        ? state.savedRoommateIds.filter((x) => x !== id)
        : [...state.savedRoommateIds, id],
    })),
  toggleSavedNews: (id) =>
    set((state) => ({
      savedNewsIds: state.savedNewsIds.includes(id)
        ? state.savedNewsIds.filter((x) => x !== id)
        : [...state.savedNewsIds, id],
    })),
}));
