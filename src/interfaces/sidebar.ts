export interface IGenderClothes {
    title: string;
    id: number;
}

export interface ISubLink {
    _id: string;
    name: string,
    value: string,
}

export interface ISidebarLink {
    _id: string;
    name: string;
    value: string;
    subCategories: ISubLink[];
}
