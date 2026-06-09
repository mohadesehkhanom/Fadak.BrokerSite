import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionFaq from "@/section/SectionFaq/SectionFaq";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";



export const metadata: Metadata = {
    title: 'سوالات متداول',
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
            <SectionFaq/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
