
export interface IFilterOptions {
    id: number;
    label?: string;
    value: string;
    colorHexCode?: string;
}

export interface IFitsOptions {
    "t-shirts": string[];
    trousers: string[];
    shorts: string[];
    shirts: string[];
    "sweatshirts-hoodies": string[];
    jackets: string[];
}