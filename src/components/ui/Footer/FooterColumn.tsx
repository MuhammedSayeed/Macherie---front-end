import React from "react";
import FooterTitle from "../FooterTitle";
import { IFooterLink } from "@/interfaces/Footer";
 

 
interface FooterColumnProps {
    title: string;
    links: IFooterLink[];
}
 
const FooterColumn = ({ title, links }: FooterColumnProps) => {
    const renderColumns = links.map((link) => (
        <li key={link.label}>
            <a href={link.href} className="hover:underline">
                {link.label}
            </a>
        </li>
    ));
 
    return (
        <div>
            <FooterTitle>{title}</FooterTitle>
            <ul className="space-y-6 text-xs text-gray-600">
                {renderColumns}
            </ul>
        </div>
    );
};
 
export default FooterColumn;