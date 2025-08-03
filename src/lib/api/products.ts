import axiosInstance from "@/config/axios";
import { ProductAvailabilityResponse, ProductsResponse } from "@/interfaces/productApi";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";


export const getProducts = async ({ pageParam = 1, category, style }: { pageParam?: number; category: string; style: string }): Promise<ProductsResponse> => {
    try {
        const { data } = await axiosInstance.get(
            `${API_BASE_URL}/products/${category}/${style}?page=${pageParam}`
        );
        return data || {
            results: [],
            metaData: { totalDocs: 0, hasNextPage: false },
        };
    } catch {
        return {
            results: [],
            metaData: { totalDocs: 0, hasNextPage: false },
            error: true,
            errorMessage: `Failed to fetch products`,
        };
    }
};


export const checkAvailability = async (id: string, size: string, quantity: string): Promise<ProductAvailabilityResponse> => {
    try {
        const { status } = await axiosInstance.get(
            `${API_BASE_URL}/products/availability/${id}/${size}/${quantity}`
        );

        if (status === 200) {
            return {
                available: true,
                error: false,
                errorMessage: null
            }
        }

        return {
            available: false,
            error: true,
            errorMessage: "Unexpected Error",
        };

    } catch {
        return {
            available: false,
            error: true,
            errorMessage: "Demand quantity is not available"
        }
    }
}