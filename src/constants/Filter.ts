import { IFilterOptions, IFitsOptions } from "@/interfaces/filter";

export const OrderPriceOptions: IFilterOptions[] = [
    {
        id: 1,
        label: "Priced from low to high",
        value: 'price'
    },
    {
        id: 2,
        label: "Priced from high to low",
        value: '-price'

    }
]

export const sizesOptions: IFilterOptions[] = [
    { id: 1, label: "Xs", value: "xs" },
    { id: 2, label: "S", value: "s" },
    { id: 3, label: "M", value: "m" },
    { id: 4, label: "L", value: "l" },
    { id: 5, label: "Xl", value: "xl" },
]

export const colorsOptions: IFilterOptions[] = [
    { id: 1, label: "Black", value: "black", colorHexCode: "#000000" },
    { id: 2, label: "White", value: "white", colorHexCode: "#FFFFFF" },
    { id: 3, label: "Red", value: "red", colorHexCode: "#F03524" },
    { id: 4, label: "Green", value: "green", colorHexCode: "#58B24C" },
    { id: 5, label: "Blue", value: "blue", colorHexCode: "#89CFF0" },
    { id: 6, label: "Beige", value: "beige", colorHexCode: "#E4D5b7" },
    { id: 7, label: "Purple", value: "purple", colorHexCode: "#800080" },
    { id: 8, label: "Brown", value: "brown", colorHexCode: "#6F4E37" },
]

export const FitsOptions: IFitsOptions = {
    't-shirts': ['Muscle', 'Oversize'],
    'trousers': ['Standard', 'Slim', 'Relaxed'],
    'shorts': ['Standard', 'Slim', 'Relaxed'],
    'shirts': ['Standard'],
    'sweatshirts-hoodies': ['Standard', 'Oversize'],
    'jackets': ['Standard'],
}