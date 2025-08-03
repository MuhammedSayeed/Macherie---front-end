export interface IColor {
    colorHexCode: string,
    colorIdentifier: string,
}

export interface ISizes {
    size: string,
    stock: number,
    _id: string,
}

export interface ICharts {
    neck?: number,
    chest?: number,
    waist?: number,
    lowRise?: number
}

export interface Imeasurement {
    size: string,
    charts: ICharts
}

export interface IProduct {
    _id: string,
    color: IColor,
    images: string[],
    sizes: ISizes[],
    price: number,
    title: string,
    category: string,
    style: string,
    description: string,
    colors: IColor[]
    productId: string,
    measurements: Imeasurement[],
    type : "tops" | "bottoms"
}

