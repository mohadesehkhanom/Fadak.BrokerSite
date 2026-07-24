import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionServices from "@/section/SectionServices/SectionServices";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "اعتبار",
    description: '',
    alternates: {
        canonical: "/credit",
    }
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>

            <SectionServices/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}