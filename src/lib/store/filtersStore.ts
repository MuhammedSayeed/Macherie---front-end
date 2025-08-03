import { create } from 'zustand';

interface FiltersState {
    colors: string[];
    sizes: string[];
    sort: string | null;
    shouldRefetch: boolean
    toggleColor: (color: string) => void;
    toggleSize: (size: string) => void;
    setSort: (sort: string) => void;
    reset: () => void;
    getQueryString: () => string;
    setShouldRefetch: (value: boolean) => void
    applyFilters: () => void
}

export const useFiltersStore = create<FiltersState>((set, get) => ({
    colors: [],
    sizes: [],
    sort: '',
    shouldRefetch : false,
    toggleColor: (color: string) => {
        const { colors } = get();
        set({
            colors: colors.includes(color) ? colors.filter((c) => c !== color) : [...colors, color]
        })
    },
    toggleSize: (size: string) => {
        const { sizes } = get();
        set({
            sizes: sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]
        });
    },
    setSort: (sort: string) => {
        const { sort: currentSortValue } = get();
        set({
            sort: sort === currentSortValue ? null : sort
        })
    },
    reset: () => {
        set({
            colors: [],
            sizes: [],
            sort: null
        })
    },
    getQueryString: () => {
        const { colors, sizes, sort } = get();
        const query = new URLSearchParams();
        if (colors.length) query.set('colors', colors.join(','));
        if (sizes.length) query.set('sizes', sizes.join(','));
        if (sort) query.set('sort', sort);
        return query.toString();
    },
    setShouldRefetch: (value: boolean) => {
        set({ shouldRefetch: value })
    },

    applyFilters: () => {
        set({ shouldRefetch: true })
    },
}))