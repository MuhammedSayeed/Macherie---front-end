import { CategoriesCarousel } from "@/interfaces/CategoryCarousel";

const trousers = "https://res.cloudinary.com/dndjbkrcv/image/upload/v1749145008/trousers_ytifo4.jpg";
const hoodies = "https://res.cloudinary.com/dndjbkrcv/image/upload/v1749145015/hoodies_ev5cgn.jpg";
const t_shirts = "https://res.cloudinary.com/dndjbkrcv/image/upload/v1749145019/t_shirts_r1iett.jpg";
const jackets = "https://res.cloudinary.com/dndjbkrcv/image/upload/v1749145015/jackets_rwxxim.webp";
const shorts = "https://res.cloudinary.com/dndjbkrcv/image/upload/v1749208178/shorts_2_hxl2zc.jpg"


const categoriesCarouselItmes: CategoriesCarousel[] = [
    {
        label: "T-shirts",
        image: t_shirts,
        path: "/tshirts"
    },
    {
        label: "Shorts",
        image: shorts,
        path: "/shorts"
    },
    {
        label: "Jackets",
        image: jackets,
        path: "/jackets"
    },
    {
        label: "Hoodies",
        image: hoodies,
        path: "/hoodies"
    },
    {
        label: "Trousers",
        image: trousers,
        path: "/trousers"
    }
]


export{
    categoriesCarouselItmes
}