import { IGenderClothes, ISidebarLink } from "@/interfaces/sidebar";

export const genderClothes: IGenderClothes[] = [

    {
        title: "Man",
        id: 1
    }
]

export const sidebarLinks: ISidebarLink[] = [
    { id: 1, text: 'NEW'},
    { id: 2, text: 'SALE'},
    {
        id: 3, text: 'CLOTHING', subLinks: [
            {
                id: 31,
                text: "T-shirts",
                
                value: 't-shirts'
            },
            {
                id: 32,
                text: "Shirts",
                
                value: 'shirts'

            },
            {
                id: 33,
                text: "Jackets",
                
                value: 'jackets'

            },
            {
                id: 34,
                text: "Sweatshirts & hoodies",
                
                value: 'sweatshirts-hoodies'

            },
            {
                id: 35,
                text: "Trousers",
                
                value: 'trousers'
            },
            {
                id: 36,
                text: "Shorts",
                value: 'shorts'
            }
        ]
    },
    {
        id: 4, text: 'SHOES',  subLinks: [
            {
                id: 41,
                text: "Trainers",
            },
            {
                id: 42,
                text: "Retro trainers",
            },
            {
                id: 43,
                text: "Casual shoes",
            },
            {
                id: 44,
                text: "Sandals",
            },
            {
                id: 45,
                text: "Leather",
            }
        ]
    },
    { id: 5, text: 'BAGS'},
    {
        id: 6, text: 'ACCESSORIES', subLinks: [
            {
                id: 61,
                text: "Caps, hats & beanies",

            },
            {
                id: 62,
                text: "Wallets",
            },
            {
                id: 63,
                text: "Casio / G- Shock",
            },
            {
                id: 64,
                text: "Belts",
            },
            {
                id: 65,
                text: "Sunglasses",
            }
        ]
    },
];

