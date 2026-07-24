import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";
import SectionFaraBourse from "@/section/SectionFaraBourse/SectionFaraBourse";
import SectionFaraBourseTimeLine from "@/section/SectionFaraBourseTimeLine/SectionFaraBourseTimeLine";


export const metadata: Metadata = {
    title: "فرابورس",
    description: '',
    alternates: {
        canonical: "/fara-bourse",
    }
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionFaraBourse/>
            <SectionFaraBourseTimeLine/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}