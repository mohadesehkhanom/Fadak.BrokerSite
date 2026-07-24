import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";
import SectionBourse from "@/section/SectionBourse/SectionBourse";
import SectionBourseTimeLine from "@/section/SectionBourseTimeLine/SectionBourseTimeLine";


export const metadata: Metadata = {
    title: "بورس",
    description: '',
    alternates: {
        canonical: "/bourse",
    }
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