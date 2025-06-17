export interface IGenderClothes {
    title: string;
    id: number;
}



export interface ISidebarLink {
    id: number | null;
    text: string;
    subLinks?: ISidebarLink[];
    value?: string;
}