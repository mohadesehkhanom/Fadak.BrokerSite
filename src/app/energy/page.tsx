import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";
import SectionEnergy from "@/section/SectionEnergy/SectionEnergy";


export const metadata: Metadata = {
    title: "بورس انرژی",
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

            <SectionEnergy/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}