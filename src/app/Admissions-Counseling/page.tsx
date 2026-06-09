import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionSupplyConsultant2 from "@/section/SectionSupplyConsultant2/SectionSupplyConsultant2";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'مشاوره پذیرش',
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


export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionSupplyConsultant2/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
