import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionSupplyConsultant from "@/section/SectionSupplyConsultant/SectionSupplyConsultant";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "مشاوره عرضه",
    description: '',
    icons: {
        icon: [
            { url: "/fav96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/fav192.png", sizes: "192x192", type: "image/png" },
        ],
    },
};


export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionSupplyConsultant/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}