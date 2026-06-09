import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";
import SectionBourse from "@/section/SectionBourse/SectionBourse";
import SectionBourseTimeLine from "@/section/SectionBourseTimeLine/SectionBourseTimeLine";


export const metadata: Metadata = {
    title: "بورس",
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
            <SectionBourse/>
            <SectionBourseTimeLine/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}